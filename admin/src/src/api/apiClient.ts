const BASE_URL = "http://localhost:8080";

export interface ErrorMessage {
  message: string;
  statusCode: number;
  response: Response;
}

const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | ErrorMessage> => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (response.status === 403) {
      return { message: "Access denied", statusCode: 403, response };
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error message: " + error);
  }
};

export default apiClient;
