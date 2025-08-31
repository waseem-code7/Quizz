from langchain_groq import ChatGroq
from .request import GroqLLMService

class LLMServiceFactory:
    def __init__(self, model, parser):
        if model == "groq":
            llm_model = ChatGroq(model_name="llama-3.1-8b-instant")
            self.llm_service = GroqLLMService(llm_model, parser)

    def invoke_llm(self, topic, number_of_questions = 5, difficulty_level = "Easy"):
        return self.llm_service.invoke_llm(topic, number_of_questions, difficulty_level)


