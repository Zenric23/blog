import axios from 'axios'


const BASE_URL = "http://localhost:5000"
const TOKEN = "YWA"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})


export const privateRequest = axios.create({
    baseURL: BASE_URL,
    headers: { authorization: `Bearer ${TOKEN}` },
})