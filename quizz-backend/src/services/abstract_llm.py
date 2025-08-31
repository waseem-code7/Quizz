from abc import ABC, abstractmethod


class AbstractBaseLLMRequest(ABC):
    def __init__(self, model, parser):
        self.parser = parser
        self.model = model


    @abstractmethod
    def invoke_llm(self, topic, number_of_questions, difficulty_level):
        pass

