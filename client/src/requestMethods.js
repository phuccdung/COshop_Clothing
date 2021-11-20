import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTIwZDJjNDMyYTAxNGUzMmRhNjZhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzM4ODk4NSwiZXhwIjoxNjM3NjQ4MTg1fQ.dvBp1w2s7vxy9ljnHTas60WvP3nsPjeZxvQ0P5FeEPU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});