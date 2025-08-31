from typing import Annotated
from fastapi import APIRouter, Query, Path
from fastapi.params import Depends

from ..services.factory import LLMServiceFactory
from ..exceptions.quiz_exceptions import NoTopicException
from ..dtos.request import TopicQuery
from ..dtos.response import QuizResponse
from langchain_core.output_parsers import PydanticOutputParser


router = APIRouter()

def get_llm_service(model_name: str):
    parser = PydanticOutputParser(pydantic_object=QuizResponse)
    return LLMServiceFactory(model_name, parser)



@router.get("/v1/{model_name}/questions")
def get_quiz_questions(topic_query: Annotated[TopicQuery, Query()], llm_service: Annotated[LLMServiceFactory, Depends(get_llm_service)]):
    topic = topic_query.topic
    if len(topic) == 0:
        raise NoTopicException()
    result = llm_service.invoke_llm(topic_query.topic, topic_query.number_of_questions, topic_query.difficulty_level)
    return result
