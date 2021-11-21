import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTIwZDJjNDMyYTAxNGUzMmRhNjZhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzUwMzY4NCwiZXhwIjoxNjM3NzYyODg0fQ.32EV0XePNFmtF3juv_ygpa5O5mbhd-ammz5Vb3New7I";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});