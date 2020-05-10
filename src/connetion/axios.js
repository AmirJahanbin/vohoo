import axios from 'axios';

class Axios {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://weespo.ir:8000/api',
            timeout: 10000
        });
        console.log('creating axios instance');
    }

    setAuthKey = (token) => {
        this.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
}

const instance = new Axios();

export default instance;

