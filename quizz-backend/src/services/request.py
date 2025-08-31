from .abstract_llm import AbstractBaseLLMRequest
from .prompts import get_quizz_prompt


class GroqLLMService(AbstractBaseLLMRequest):
    def __init__(self, model, parser):
        super().__init__(model, parser)

    def invoke_llm(self, topic, number_of_questions=5, difficulty_level="Easy"):
        template = get_quizz_prompt(self.parser)
        chain = template | self.model | self.parser
        result = chain.invoke({"topic": topic, "number_of_questions": number_of_questions, "difficulty_level": difficulty_level})
        return result