import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticleAsync,
  selectArticle,
} from "../../features/articles/articleSlices";
import { AppDispatch } from "../../app/store";

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const article = useSelector(selectArticle);

  useEffect(() => {
    dispatch(fetchArticleAsync(Number(id)));
  }, [dispatch, id]);
  return (
    <>
      {article && (
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      )}
    </>
  );
};

export default Article;
