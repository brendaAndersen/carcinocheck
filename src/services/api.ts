import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`
    }
})
