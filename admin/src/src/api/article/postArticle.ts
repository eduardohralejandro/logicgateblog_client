import apiClient from "../apiClient";
import Article from "../../interfaces/article";

export interface IArticleRequest {
  articleData: Article;
  userId: number;
  token: string;
}
export const createArticle = async (articleRequest: IArticleRequest) => {
  return await apiClient(`articles/create/${articleRequest.userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${articleRequest.token}`,
    },
    body: JSON.stringify(articleRequest.articleData),
  });
};
