import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID f5c0635ea339e28c9670bff864e9712a7d466337e365abc41f4ec747f3a9bcce'
    }
})