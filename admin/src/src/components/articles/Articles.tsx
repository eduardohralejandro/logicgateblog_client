import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchArticlesAsync,
  selectArticles,
  deleteArticleAsync,
} from "../../features/articles/articleSlices";
import { ButtonElement, ListElement } from "../components";
import { Article } from "../../interfaces/interfaces";
import { Avatar, List } from "antd";
import { formatDate } from "../../utils/formatDate";
import { AppDispatch } from "../../app/store";
import { htmlParser } from "../../utils/htmlParser";
import { Link } from "react-router-dom";
import { truncateString } from "../../utils/truncateString";
import { Trash2 } from "lucide-react";
import styles from "./articles.module.scss";

const Articles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector(selectArticles);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchArticlesAsync());
  }, [dispatch, token]);

  const add = (articleId: number | undefined) => {
    if (token && articleId) {
      dispatch(deleteArticleAsync({ token: token, articleId })).then(() => {
        dispatch(fetchArticlesAsync());
      });
    }
  };

  const renderArticles = (item: Article, index: number) => {
    const randUserAvatar = `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`;
    return (
      <div>
        <Link to={`/articles/${item.articleId}`}>
          <List.Item
            style={{ width: "100%" }}
            key={index}
            extra={
              <img
                style={{ height: "15rem", width: "15rem" }}
                src={item?.photo}
                alt=""
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={randUserAvatar} />}
              description={`Created: ${formatDate(new Date(item.dateCreated))}`}
              title={item.title}
            />

            {truncateString(htmlParser(item.body), 300)}
            <div
              className={styles.articles__trash_container}
              onClick={(e) => {
                add(item.articleId);
                e.preventDefault();
              }}
            >
              <ButtonElement
                type="text"
                text={"Delete"}
                className={styles.btn}
                style={{
                  padding: "0.25rem 0.125rem ",
                  display: "flex",
                  alignItems: "center",
                }}
                icon={
                  <Trash2
                    className={styles.articles__trash_icon}
                    size={"16px"}
                    style={{ paddingRight: "0rem" }}
                  />
                }
              ></ButtonElement>
            </div>
          </List.Item>
        </Link>
      </div>
    );
  };

  return (
    <ListElement
      dataSource={articles}
      renderItem={renderArticles}
      listDirection="vertical"
      size="large"
    />
  );
};

export default Articles;
