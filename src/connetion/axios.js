import axios from 'axios';

class Axios {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://weespo.ir:8001/api',
            timeout: 10000
        });
        const existingToken = localStorage.getItem('token')
        if(existingToken) this.axios.defaults.headers.common['Authorization'] = `Token ${existingToken}`;

        console.log('creating axios instance');
    }

    setAuthKey = (token) => {
        this.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
}

const instance = new Axios();

export default instance;

