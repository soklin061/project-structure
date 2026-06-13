import { apiClient } from './apiClient';
import { API_ENDPOINTS } from './apiEndpoints';

export const apiService = {
  getProducts: async () => {
    const data = await apiClient(API_ENDPOINTS.PRODUCTS.GET_ALL);
    return data.products; // Extracts the array from DummyJSON
  }
};