

# Pip install necessary package
# %pip install --upgrade --quiet  langchain-openai
# %pip install --upgrade --quiet  psycopg2-binary
# %pip install --upgrade --quiet  tiktoken
from langchain_community.docstore.document import Document
from langchain_community.document_loaders import TextLoader
#import pinecone
#from langchain_community.vectorstores import pinecone
from langchain_pinecone import PineconeVectorStore
# from langchain.embeddings import OpenAIEmbeddings
# from langchain_community.embeddings import OpenAIEmbeddings
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import CharacterTextSplitter
from langchain_community.document_loaders import PyMuPDFLoader, PyPDFLoader
import ast
import os

text_splitter = CharacterTextSplitter(separator=".",chunk_size=300,chunk_overlap=0)


# docs = text_splitter.split_documents("documents")
# embeddings = OpenAIEmbeddings()
# connection_string = os.environ.get("DATABASE_URL")
# collection_name = "state_of_the_union"



# This function assumes that the file is in the same directory as the main.py file
def getFilePath(fileName: str):
    # Remove the last part of the path called "main.py" and add the path to the pdf file
    actualPath = os.path.dirname(__file__)
    path = actualPath.split("\\")
    path.append(fileName)
    return "\\".join(path)

def getDataLocally():
    file_path = getFilePath("LifecheckGPT.pdf")
    loader = PyPDFLoader(file_path)
    data = loader.load_and_split(text_splitter=text_splitter)
    return data

def getEmbedding(data: str) -> list[float]:
    openAIembeddier = OpenAIEmbeddings()
    emb = openAIembeddier.embed_query(data)
    return emb

# type(data) == langchain_core.documents.base.Documen
def getNewListEmbeddings(data) -> list[list[float]]:
    listEmbeddings = []
    openAIembeddier = OpenAIEmbeddings()
    for chunk in data:
        # print(type(chunk.page_content))
        # print(chunk.page_content)
        # print("\n")
        newEmbedding = openAIembeddier.embed_query(chunk.page_content)
        listEmbeddings.append(newEmbedding)
    return listEmbeddings

def storeEmbeddingsLocally(listEmbeddings: list[list[float]]):
    print("storing embeddings locally...")
    n:int = len(listEmbeddings)
    if(n == 0):
        return
    with open(getFilePath("embeddings.txt"), "w") as f:
        f.write("[")
        for i,embedding in enumerate(listEmbeddings):
            # Embedding should be a list of floats
            embedding_str = str(embedding)
            # print("Embedding: ")
            # print(embedding)
            # print(embedding_str)
            f.write(embedding_str)
            if i != n-1:
                f.write(",")
        f.write("]")
        f.close()
        print("Embeddings stored successfully")
        return
    print("Failed to store embeddings")
    
def getLocalEmbeddings() -> list[list[float]]:
    # Retrieve the data that is in the embeddings.txt file
    with open(getFilePath("embeddings.txt"), "r") as f:
        data = f.read()
    
    # Safely evaluate the string as a Python expression
    embeddings = ast.literal_eval(data)
    return embeddings
    
def uploadDataToPinecone():
    embeddings = OpenAIEmbeddings()
    #environmet=os.getenv("PINECONE_ENVIRONMENT")
    index_name=os.getenv("PINECONE_INDEX_NAME")
    docs = getDataLocally()
    PineconeVectorStore.from_documents(docs, embeddings, index_name=index_name)
    