import apiClient from "../apiClient";

interface IToken {
  token: string;
}

export interface ILoginAuthor {
  name: string;
  email: string;
  password: string;
}

export const loginUser = async (userData: ILoginAuthor) => {
  return await apiClient<IToken>("api/v1/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
