import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Question from "./Question"

function Quiz({questions}) {
    const [answers, setAnswers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    function handleQuizSubmit() {
        setSubmitted(true);
    }

    return (
        <>
            <Typography variant='h5' sx={{my: 5}}>Quiz</Typography>
            <Box key={"quiz"} sx={{my: 5 }}>
                {questions.map(function (q) {
                    return (<Question key={q.id} submitted={submitted} answers={answers} setAnswers={setAnswers} q={q}/>)
                })}
            </Box>

            <Box key={"submit-quiz"} sx={{my: 5 }}>
                <Button disabled={submitted} size='large' variant='outlined' onClick={handleQuizSubmit}>Submit</Button>
            </Box>
        </>
    )
}

export default Quiz;