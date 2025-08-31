from enum import Enum

class ModelName(str, Enum):
    grok = "groq"

class DifficultyLevel(str, Enum):
    Easy = "Easy"
    Medium = "Medium"
    Hard = "Hard"
    Expert = "Expert"
