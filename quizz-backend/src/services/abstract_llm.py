from abc import ABC, abstractmethod

from langchain.output_parsers import RetryWithErrorOutputParser


class AbstractBaseLLMRequest(ABC):
    def __init__(self, model, parser):
        self.parser = parser
        self.model = model
        self.retry_parser = RetryWithErrorOutputParser.from_llm(parser=parser, llm=self.model, max_retries=3)


    @abstractmethod
    def invoke_llm(self, topic, number_of_questions, difficulty_level):
        pass

