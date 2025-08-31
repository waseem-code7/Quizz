import { useState } from 'react'
import { Box, Button, TextField, Radio, RadioGroup, FormControlLabel, Typography, CircularProgress } from '@mui/material';
import { getQuestions } from "../api/requests"

function PromptForm(props) {
    const [prompt, setPrompt] = useState("")
    const [promptSubmitted, setPromptSubmitted] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy")
    const [numberOfQuestions, setNumberOfQuestions] = useState(5)

    

    async function handleSubmit() {
        setPromptSubmitted(true);
        props.setQuizQuestions([])
        const questions = await getQuestions(prompt, numberOfQuestions, difficulty);
        props.setQuizQuestions(questions);
    }

    function handlePromptChange(event) {
        console.log(event.target.value)
        setPrompt(event.target.value)
        if(promptSubmitted) {
            setPromptSubmitted(false)
        }
    }

    function handleSetNumberOfQuestionsChange(event) {
        const value = parseInt(event.target.value)
        setNumberOfQuestions(value)
    }

    return (
        <>

            <Box key="interface-row-1" sx={{ width: 1, display: 'flex', justifyContent: "space-between" }}>
                <Box key="interface-row-1-numberofqs" sx={{ width: "45%" }}>
                    <TextField
                        label="Number of Questions"
                        fullWidth
                        type="number"
                        inputProps={{ min: 0, max: 20, step: 1 }}
                        value={numberOfQuestions}
                        onChange={handleSetNumberOfQuestionsChange}

                    />

                </Box>
                <Box key="interface-row-1-difficulty" sx={{ width: "50%", display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ marginRight: 3 }}>
                        Difficulty Level
                    </Typography>
                    <RadioGroup
                        row
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
                        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
                        <FormControlLabel value="Expert" control={<Radio />} label="Expert" />
                    </RadioGroup>
                </Box>

            </Box>



            <Box key="interface-row-2" sx={{ width: 1, display: 'flex', alignItems: 'center', marginTop: 3 }}>
                <TextField sx={{ width: "80%" }} label="Enter Topic" id="fullWidth" value={prompt} onChange={handlePromptChange} disabled={promptSubmitted && !props.receivedResponse} />
                <Button size='large' variant='outlined' sx={{ mx: 5 }} onClick={handleSubmit} disabled={promptSubmitted && !props.receivedResponse}>Submit</Button>
                {promptSubmitted && !props.receivedResponse && (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: "blue",
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}
            </Box>
        </>
    )
}

export default PromptForm;