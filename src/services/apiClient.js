import { API_CONFIG } from '../config/apiConfig';

export const apiClient = async (endpoint, options = {}) => {
  const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, options);
  if (!response.ok) throw new Error('Network error');
  return await response.json();
};