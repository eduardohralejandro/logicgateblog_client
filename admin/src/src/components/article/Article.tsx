import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticleAsync,
  selectArticle,
} from "../../features/articles/articleSlices";
import { AppDispatch } from "../../app/store";
import DOMPurify from "dompurify";
import styles from "./article.module.scss";
import { Avatar } from "antd";

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const article = useSelector(selectArticle);

  useEffect(() => {
    dispatch(fetchArticleAsync(Number(id)));
  }, [dispatch, id]);
  const randUserAvatar = `https://api.dicebear.com/7.x/miniavs/svg?seed=${id}`;

  return (
    <>
      {article && (
        <div className={styles.article_container}>
          <h1>{article.title}</h1>
          <span className={styles.article_container__avatar}>
            <Avatar src={randUserAvatar} />
          </span>
          <img
            style={{
              height: "35rem",
              width: "35rem",
              margin: "1rem 30rem 0 30rem",
            }}
            src={article.photo}
            alt=""
          />
          <div
            className={styles.article_container__html_container}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.body),
            }}
          />
        </div>
      )}
    </>
  );
};

export default Article;
