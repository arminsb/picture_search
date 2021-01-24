import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RLnZmHb_V79nF0MShc5AC2si9TOSDbtbVPQ5N31ijnw'
    },
})