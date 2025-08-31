import langchain_core.output_parsers
from langchain_core.prompts import PromptTemplate


def get_quizz_prompt(quizParser: langchain_core.output_parsers.PydanticOutputParser):
    return PromptTemplate(
        template="""
            Given a topic you will need to generate quiz question related to it. 
            The difficulty level and the number of questions to generate will be provided. 
            Each question needs to have 4 options. The json format on how to return the response will be provided to you.
    
    
            Create {number_of_questions} quiz questions in JSON format and must adhere to give format instructions below. Don't generate any code. 
            
            Difficulty Level: {difficulty_level}
            
            Each question must have:
            - A id for the current question. This can be an index or some random string but must be unique across the list
            - A question string
            - A list of 4 options
            - One correct answer from the options

            {format_instructions}

            Topic:
            {topic}
            """, input_variables=["topic", "number_of_questions", "difficulty_level"]).partial(format_instructions=quizParser.get_format_instructions())