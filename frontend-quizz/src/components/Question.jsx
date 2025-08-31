import { Box, Typography, FormControlLabel, RadioGroup, Radio, Alert } from "@mui/material"
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function Question(props) {

    function handleChange(questionId, selectedAnswer) {
        props.setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedAnswer
        }))
    }

    const quizSubmitted = props.submitted;
    const isCorrectOptionSelected = (props.answers[props.q.id] || "") === props.q.answer;

    return (
        <>
            <Box key={props.q.id} sx={{ marginBottom: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6">
                        {props.q.question}
                    </Typography>
                    {quizSubmitted &&
                        (isCorrectOptionSelected ?
                            <CheckCircleOutlineSharpIcon sx={{ mx: 2, color: "green" }}></CheckCircleOutlineSharpIcon> :
                            <CancelOutlinedIcon sx={{ mx: 2, color: "red" }}></CancelOutlinedIcon>)
                    }
                </Box>

                <RadioGroup
                    value={props.answers[props.q.id] || ""}
                    onChange={(e) => handleChange(props.q.id, e.target.value)}
                >
                    {props.q.options.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            value={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}

                    {quizSubmitted && (
                            <Alert severity={isCorrectOptionSelected ? "success" : "error"}>
                                Answer: {props.q.answer}
                            </Alert>
                        )
                    }

                </RadioGroup>
            </Box>
        </>
    )
}

export default Question;