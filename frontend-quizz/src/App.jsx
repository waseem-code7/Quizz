import PromptForm from "./components/PromptForm"
import Quiz from "./components/Quiz"
import AppNav from "./components/AppNav"
import { Container } from '@mui/material';
import { useState } from "react";
function App() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const receivedResponse = quizQuestions.length > 0;


  return (
    <>
      <AppNav />
      <Container>
        <PromptForm receivedResponse={receivedResponse} setQuizQuestions={setQuizQuestions}></PromptForm>
        {quizQuestions.length > 0 && <Quiz questions={quizQuestions}></Quiz>}
      </Container>
    </>
  )
}

export default App
