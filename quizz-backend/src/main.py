import os
import sys

from fastapi import FastAPI, Request
from starlette.responses import JSONResponse
import starlette.status as status_code
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv
sys.path.append(os.getcwd())

dotenv_path = os.path.abspath(".env")
load_dotenv(dotenv_path=dotenv_path)

origins = [
    "http://localhost:5173",
]

from .exceptions.quiz_exceptions import NoTopicException
from .controller.quiz_controller import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(NoTopicException)
def handle_no_topic_exception(request: Request, exe: NoTopicException):
    return JSONResponse(content="No Topic Provided", status_code=status_code.HTTP_400_BAD_REQUEST)

app.include_router(router)





