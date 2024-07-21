import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const getSkills = () => API.get('/skills');
export const addSkill = (skillData) => API.post('/skills/add', skillData);
export const updateSkill = (id, skillData) => API.put(`/skills/update/${id}`, skillData);
export const deleteSkill = (id) => API.delete(`/skills/delete/${id}`);
export const updateUserData = (userData) => API.put('/users/update', userData);
export const getUserData = () => API.get('/users/data');
