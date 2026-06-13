import axios from 'axios';
import { API_CONFIG } from '../config/apiConfig';

export const apiClient = async (endpoint, params = {}) => {
  try {
    const response = await axios({
      url: `${API_CONFIG.baseUrl}${endpoint}`,
      ...params,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Network error');
  }
};