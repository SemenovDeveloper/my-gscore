import axios from 'axios';

const baseURL = 'https://gscore-back.herokuapp.com/api/';

export const axiosInstance = axios.create({ baseURL: baseURL });