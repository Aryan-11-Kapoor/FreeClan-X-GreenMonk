import axios from "axios";

const Base_URL = "http://localhost:5000/api/"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjhhZDA4MGUwYmJhNTZjNmJmNWRlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU0Mjg0NiwiZXhwIjoxNjYwODAyMDQ2fQ.JhKzeR0GyM5C-KAJIr6ITvociBZ6o4YFNRUZgwX8td4";
export const publicRequest = axios.create(
    {
        baseURL: Base_URL,
    }
);

export const userRequest = axios.create(
    {
        baseURL: Base_URL,
        header:{token:`Bearer ${TOKEN}`},
    }
);