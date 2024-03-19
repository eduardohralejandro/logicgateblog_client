import Article from "../../interfaces/article";
import apiClient from "../apiClient";

export const fetchArticle = async (articleId: number) => {
  return await apiClient<Article>(`articles/${articleId}`);
};
