const BASE_URL = 'http://localhost:8080'
const apiClient = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};

export default apiClient;
