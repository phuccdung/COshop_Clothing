import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTIwZDJjNDMyYTAxNGUzMmRhNjZhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzA2ODU3OSwiZXhwIjoxNjM3MzI3Nzc5fQ.L95kD7sIOMF39daK4ocJxSm--PiA0xsgl3934JSlNf0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});