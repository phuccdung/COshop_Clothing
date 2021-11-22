import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTIwZDJjNDMyYTAxNGUzMmRhNjZhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU4OTIzMCwiZXhwIjoxNjM3ODQ4NDMwfQ.v-rD4YU5KQRDKv3MZ5zCjSk3Q2wAaO4n3QJabmaZYS8";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});