import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'access_token': token } = parseCookies();

export const api = axios.create({
    baseURL: 'http://localhost:3333',
})

api.interceptors.request.use(config => {
    return config;
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}