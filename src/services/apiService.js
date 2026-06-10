import apiClient from './apiClient';
import { API_ENDPOINTS } from './apiEndpoints';

export const fetchProducts = async () => {
  const response = await apiClient.get(API_ENDPOINTS.PRODUCTS);
  return response.data; 
};

export const fetchCategories = async () => {
  const response = await apiClient.get(API_ENDPOINTS.CATEGORIES);
  return response.data;
};