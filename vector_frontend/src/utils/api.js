const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const fetchItems = () => {
  return axiosInstance.get('/items/')
}

export const setNewPositions = (data) => {
  return axiosInstance.post('/set_new_positions/', data)
}
