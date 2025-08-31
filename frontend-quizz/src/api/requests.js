import axios from "axios";

export async function getQuestions(topic, number_of_questions, difficulty_level) {
    const baseUrl = "http://localhost:8000";
    const url = "/v1/groq/questions?topic=" + encodeURIComponent(topic) + "&number_of_questions=" + number_of_questions + "&difficulty_level=" + difficulty_level;
    const response = await axios.get(baseUrl + url);
    return response.data.questions;
}