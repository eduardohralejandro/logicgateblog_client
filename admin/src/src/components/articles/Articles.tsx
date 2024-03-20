import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchArticlesAsync,
  selectArticles,
} from "../../features/articles/articleSlices";
import { ListElement } from "../components";
import { Article } from "../../interfaces/interfaces";
import { Avatar, List } from "antd";
import { formatDate } from "../../utils/formatDate";
import { AppDispatch } from "../../app/store";
import { htmlParser } from "../../utils/htmlParser";
import { Link } from "react-router-dom";
import { truncateString } from "../../utils/truncateString";

const Articles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector(selectArticles);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchArticlesAsync());
  }, [dispatch, token]);

  const renderArticles = (item: Article, index: number) => {
    const randUserAvatar = `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`;
    return (
      <Link to={`/articles/${item.articleId}`}>
        <List.Item style={{ width: "100%" }} key={index} extra={<p>Image</p>}>
          <List.Item.Meta
            avatar={<Avatar src={randUserAvatar} />}
            description={`Created: ${formatDate(new Date(item.dateCreated))}`}
            title={item.title}
          />

          {truncateString(htmlParser(item.body), 300)}
        </List.Item>
      </Link>
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
