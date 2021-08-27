import axios from 'axios';

const baseURL = 'http://192.168.100.4:8080/api';

const petrideApi = axios.create( { baseURL});



export default petrideApi;