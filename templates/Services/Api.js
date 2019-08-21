module.exports = `import axios from 'axios';
import { getToken } from './Authentication';

const headers = {
    'Content-Type': 'application/json'
};

const API = axios.create({
    baseURL: /* PUT YOUR URL HERE! */,
    headers
});

API.interceptors.request.use(async config => {
    return config;
})

export default API;
`