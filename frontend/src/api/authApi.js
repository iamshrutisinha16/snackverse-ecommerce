import API from './axios';

export const loginUser = async (email, password) => {
  const { data } = await API.post('/users/login', { email, password });
  return data;
};

export const registerUser = async (name, email, password) => {
  const { data } = await API.post('/users', { name, email, password });
  return data;
};

export const getProfile = async () => {
  const { data } = await API.get('/users/profile');
  return data;
};