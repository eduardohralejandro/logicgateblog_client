import apiClient from "../apiClient";
import { Article } from "../../interfaces/interfaces";

export const fetchArticles = async () => {
  return await apiClient<Article[]>("articles/all");
};
