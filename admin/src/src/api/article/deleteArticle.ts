import apiClient from "../apiClient";

export interface IArticleDelete {
  articleId: number;
  token: string;
}
export const deleteArticle = async (articleDeleteData: IArticleDelete) => {
  return await apiClient(`articles/delete/${articleDeleteData.articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${articleDeleteData.token}`,
    },
  });
};
