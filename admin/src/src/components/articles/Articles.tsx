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

const Articles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchArticlesAsync());
  }, [dispatch]);

  const renderArticles = (item: Article, index: number) => {
    const randUserAvatar = `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`;
    return (
      <List.Item style={{ width: "100%" }} key={index} extra={<p>Image</p>}>
        <List.Item.Meta
          avatar={<Avatar src={randUserAvatar} />}
          description={`Created: ${formatDate(new Date(item.dateCreated))}`}
          title={<a>{item.title}</a>}
        />
        {item.body}
      </List.Item>
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
