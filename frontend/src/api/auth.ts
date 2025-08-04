import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://localhost:3000/auth',
  withCredentials: true,
});

export default authApi;
