import { useState, useEffect } from 'react';

export const useProducts = (apiService) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const execute = async () => {
      try {
        setLoading(true);
        const result = await apiService();
        setData(result);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    execute();
  }, [apiService]);

  return { data, loading, error };
};