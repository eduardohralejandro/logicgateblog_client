export interface ErrorMessage {
  message: string;
  statusCode: number;
  response: Response;
}
console.log("on api client")
const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | ErrorMessage> => {
  try {
    const response = await fetch(`/testapi/${endpoint}`, options);
    console.log(response)
    if (!response.ok) {
      const errorData: ErrorMessage = {
        message: "Error occurred",
        statusCode: response.status,
        response: response,
      };
      throw new Error(JSON.stringify(errorData));
    }
    const responseData: T = await response.json();

    return responseData || ({} as T);
  } catch (error) {
    throw new Error("Error message: " + error);
  }
};

export default apiClient;
