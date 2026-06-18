import { apiClient } from './apiClient';
import { API_ENDPOINTS } from './apiEndpoints';

export const apiService = {
  getCategories: async () => {
    const data = await apiClient(
      API_ENDPOINTS.CATEGORY.GET_ALL
    );

    return data;
  },

  getProducts: async () => {
    const data = await apiClient(
      API_ENDPOINTS.PRODUCTS.GET_ALL
    );

    return data.products;
  },

  getProductById: async (id) => {
    return await apiClient(
      API_ENDPOINTS.PRODUCTS.GET_ONE.replace(':id', id)
    );
  },
};