const URL = 'http://jservice.io/api';

export const fetchCategories = async () => {
  const response = await fetch(`${URL}/categories?count=5`);
  const data = await response.json();
  return data;
};

export const fetchCategoryById = async (id) => {
  const response = await fetch(`${URL}/category?id=${id}`);
  const data = await response.json();
  return data;
};
