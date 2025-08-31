from typing import List
from pydantic import BaseModel, Field


class QuestionAnswerFormat(BaseModel):
    id: str = Field(description="An random unique id for the current question")
    question: str = Field(description="A quiz question generated based on the text provided")
    options: List[str] = Field(description="List of options to select an answer for the question")
    answer: str = Field(description="Correct answer of the current question from the options")

class QuizResponse(BaseModel):
    questions: List[QuestionAnswerFormat] = Field(description="A list of quiz question in the format mentioned.")