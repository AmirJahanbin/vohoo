import axios from 'axios';

class Axios {
    constructor() {
        console.log('creating axios instance');

        this.axios = axios.create({
            baseURL: 'http://5.253.25.176:8000/api'
            // timeout: 10000
        });

        const existingToken = localStorage.getItem('token')
        if (existingToken) this.axios.defaults.headers.common['Authorization'] = `Token ${existingToken}`;

        // this.axios.interceptors.request.use(function (config) {
        //
        //     // spinning start to show
        //     // UPDATE: Add this code to show global loading indicator
        //     document.body.classList.add('loading-indicator');
        //
        //     return config;
        // }, function (error) {
        //     return Promise.reject(error);
        // });
        //
        // this.axios.interceptors.response.use(function (response) {
        //
        //     // spinning hide
        //     // UPDATE: Add this code to hide global loading indicator
        //     document.body.classList.remove('loading-indicator');
        //
        //     return response;
        // }, function (error) {
        //     document.body.classList.remove('loading-indicator');
        //     return Promise.reject(error);
        // });

    }

    setAuthKey = (token) => {
        localStorage.setItem('token', token);
        this.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
    getAuthKey = () => {
        return localStorage.getItem('token');
    }
}

const instance = new Axios();

export default instance;

