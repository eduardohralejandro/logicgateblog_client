import apiClient from "../apiClient";
import { IAuthor } from "../../interfaces/interfaces";

interface IToken {
  token: string;
}
export const registerUser = async (userData: IAuthor) => {
  return await apiClient<IToken>("api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
