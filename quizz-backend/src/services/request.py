from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel, RunnableLambda

from .abstract_llm import AbstractBaseLLMRequest
from .prompts import get_quizz_prompt


class GroqLLMService(AbstractBaseLLMRequest):
    def __init__(self, model, parser):
        super().__init__(model, parser)

    def invoke_llm(self, topic, number_of_questions=5, difficulty_level="Easy"):
        template = get_quizz_prompt(self.parser)
        chain = (
            RunnableParallel({
            "prompt": template,
            "completion": template | self.model | StrOutputParser()
        }
        ) | RunnableLambda(lambda x: self.retry_parser.parse_with_prompt(completion=x["completion"], prompt_value=x["prompt"])))
        result = chain.invoke({"topic": topic, "number_of_questions": number_of_questions, "difficulty_level": difficulty_level})
        return result