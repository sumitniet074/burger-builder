import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-fa2f8.firebaseio.com/'
});

export default instance;