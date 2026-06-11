import API from './axios';

export const fetchCategories = async () => {
  const { data } = await API.get('/categories');
  return data;
};

export const createCategory = async (categoryData) => {
  // Category data mein name, slug, aur image hoga
  const { data } = await API.post('/categories', categoryData);
  return data;
};