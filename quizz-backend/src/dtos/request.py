from pydantic import BaseModel, Field
from ..enums.quiz_enums import DifficultyLevel

class TopicQuery(BaseModel):
    topic: str = Field(description="Topic for which questions needs to be generated.")
    number_of_questions: int = Field(description="Number of questions to be generated.")
    difficulty_level: DifficultyLevel = Field(description="difficulty level of questions")
