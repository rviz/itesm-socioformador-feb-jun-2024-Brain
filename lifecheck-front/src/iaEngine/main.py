from dotenv import load_dotenv
#from langchain.chat_models import ChatOpenAI
#from langchain_community.chat_models import ChatOpenAI
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.memory import ChatMessageHistory #ConversationSummaryMemory
#from langchain_core.runnables import RunnableLambda, RunnableSequence
from langchain_pinecone import PineconeVectorStore
from langchain import hub
#from langchain import LLMChain
#from langchain.chains import LLMChain
#from actualizeEmbeddings import getDataLocally, uploadDataToPinecone
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains.retrieval import create_retrieval_chain
import os

def getHistory(id:int = -1) -> ChatMessageHistory:
    history = ChatMessageHistory()
    #history.add_ai_message("")
    # history.add_user_message("hi")
    # history.add_ai_message("hi there!")
    return history

history = getHistory()

def main():
    # INITIALIZE
    load_dotenv()
    chat = ChatOpenAI(model="gpt-3.5-turbo-0125", temperature="0.3", verbose=True)
    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                "You are an expert coach and helpful assistant. Answer all questions to the best of your ability",
            ),
            MessagesPlaceholder(variable_name="messages"),
        ]
    )
    vectorstore = PineconeVectorStore(index_name=os.environ["PINECONE_INDEX_NAME"], embedding=OpenAIEmbeddings())
    combine_docs_chain = create_stuff_documents_chain(chat, prompt)
    retrieval_chain = create_retrieval_chain(
        retriever=vectorstore.as_retriever(),
        combine_docs_chain=combine_docs_chain
    )
    #chain = prompt | chat
    
    while True:
        question = input(">> ")
        if question == "exit":
            break
        if(question == ""):
            continue
        
        history.add_user_message(question)
        #response = chain.invoke({"messages": history.messages})
        response = retrieval_chain.invoke(input={"messages": history.messages})
        history.add_ai_message(response)
        print(response)
    
    # Example: chat.invoke([HumanMessage(content="What did you just say?")])

if __name__ == '__main__':
    main()
    
       
    
  

        


    
    