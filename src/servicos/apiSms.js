import axios from "axios";

export const apiSms = axios.create({
    baseURL: 'https://api.zenvia.com/v2'
})