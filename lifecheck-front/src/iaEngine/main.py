from dotenv import load_dotenv
#from langchain.chat_models import ChatOpenAI | Deprecated
#from langchain_community.chat_models import ChatOpenAI | Deprecated
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.memory import ChatMessageHistory #ConversationSummaryMemory
#from langchain_core.runnables import RunnableLambda, RunnableSequence
from langchain_pinecone import PineconeVectorStore
# from langchain.chains.conversation.memory import ConversationBufferWindowMemory | Possible improvement to implement
# from langchain import hub | No more usage for the project
#from langchain import LLMChain | Deprecated
#from langchain.chains import LLMChain | Deprecated
#from actualizeEmbeddings import getDataLocally, uploadDataToPinecone | Usage situationally
# from langchain.chains.combine_documents import create_stuff_documents_chain | No utility anymore for the project
# from langchain.chains.retrieval import create_retrieval_chain | No utility anymore for the project
from langchain.chains import RetrievalQA
import pg8000.native
# import pinecone  | Implemented in another way
import os

def getHistory(id:int = -1) -> ChatMessageHistory:
    # Empty history 
    history = ChatMessageHistory()
    #history.add_ai_message("")
    # history.add_user_message("hi")
    # history.add_ai_message("hi there!")
    return history

def getContext(userId:int, categoryId:str) -> str:
    try:
        connection = pg8000.native.Connection(
            database=os.environ["DB_NAME"],
            user=os.environ["DB_USER"],
            password=os.environ["DB_PASSWORD"],
            host=os.environ["DB_HOST"],
            port=os.environ["DB_PORT"]
        )
        print("Successful connection")
    except (Exception) as err:
        print(f"{err}")
        return
    
    formatedContext:str = ""
    for question,answer in connection.run(f"SELECT q.q_text AS Question, a.a_text AS Answer FROM question q JOIN category c ON q.category_id = c.category_id JOIN answer a ON q.question_id = a.question_id WHERE a.user_id = '{userId}' AND c.category_id = {categoryId};"):
        formatedContext += f"{question} Ans: {answer}\n"
    
    connection.close()
    return formatedContext
    

history = getHistory()

def updateFeedback(userId:str ,categoryId:int ,feedback:str, evaluationId:int) -> bool:
    try:
        connection = pg8000.native.Connection(
            database=os.environ["DB_NAME"],
            user=os.environ["DB_USER"],
            password=os.environ["DB_PASSWORD"],
            host=os.environ["DB_HOST"],
            port=os.environ["DB_PORT"]
        )
        print("Successful connection")
    except (Exception) as err:
        print(f"{err}")
        return False
    query=""
    if(categoryId == 3):
        try:
            connection.run(f"UPDATE user_evaluation_category_analysis SET feedback_education = '{feedback}' WHERE user_id = '{userId}';")
        except (Exception) as err:
            return False
        # Assuming connection is your database connection object
        # query = """
        #     UPDATE user_evaluation_category_analysis
        #     SET feedback_education = %s 
        #     WHERE user_id = %s 
        #     AND user_evaluation_category_analysis_id = %s;
        # """

    # Execute the query with parameters
    #connection.run(query, (feedback, userId, evaluationId))
    return True


def getInfoBasedOnCategory(categoryId:int, chat):
    vectorstore = PineconeVectorStore.from_existing_index(index_name=os.environ["PINECONE_INDEX_NAME"], embedding=OpenAIEmbeddings())
    category:str = "Education"
    if(categoryId == 3):
        category = "Education"
        
    question:str = f"Based on that context, give me the best hints to improve my life quality in {category}"
    
    qa_chain = RetrievalQA.from_chain_type(
            llm=chat,
            chain_type="stuff",
            retriever=vectorstore.as_retriever()
        )
    
    result = qa_chain({"query": question})
    return result["result"]
    
def getFeedbackFromLLM(userQuestionAnswer:str, infoBasedOnCategory:str, chat) -> str:
    history = getHistory()
    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                f"You are an expert coach and helpful assistant that gives tips to improve life quality. Answer all questions to the best of your ability using the answer answer that the user provides and the extra info of possible tips: {infoBasedOnCategory}. You can be creative. \n The context of the user is: {userQuestionAnswer}. Responde en Español.",
            ),
            MessagesPlaceholder(variable_name="messages"),
        ]
    )
    chain = prompt | chat
    response = chain.invoke({"messages": history.messages})
    return response.content

def main(userId:str, categoryId:int, evaluationId:int) -> bool:
    # INITIALIZE
    load_dotenv()
    chat = ChatOpenAI(model="gpt-3.5-turbo-0125", temperature="0.3", verbose=True)
    
    # 1°- Retrieve question,answer of user based on category
    contextOfQuestionAnswerUser:str = getContext(userId, categoryId)
    
    # 2°- Retrieve information based on the category
    infoBasedOnCategory:str = getInfoBasedOnCategory(categoryId,chat)
    # 3°- Add all the context and get one response of gpt
    feedback:str = getFeedbackFromLLM(contextOfQuestionAnswerUser, infoBasedOnCategory, chat)
    
    # 4°- Update the feedback of the user based on all the context 
    isDone:bool = updateFeedback(userId, categoryId, feedback, evaluationId)
    
    return isDone

if __name__ == '__main__':
    main("1",3, 3)
    
       
    
  

        


    
    