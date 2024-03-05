import { FC, ReactNode } from "react";
import { Avatar, List } from "antd";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `Binary ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: "How does binary work?",
  content:
    "In the context of mathematics and computer science, 'binary' often refers to the binary number system, which is a base-2 numeral system. It uses only two digits, 0 and 1, to represent numbers. In this system, each digit's position represents a power of 2.",
}));

// optional will be changed to mandatory fields to some of them
interface IListElementProps {
  key?: string | number;
  itemLayout?: "horizontal" | "vertical";
  size?: string;
  pagination?: {
    onChange: () => void;
    pageSize: number;
  };
  style?: { [key: string]: string };
  extra: ReactNode;
  avatar?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
}
// data will be changed by real data from db and it is going to be passed via props
const ListElement: FC<IListElementProps> = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    style={{ width: "100%" }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://cdn.gencraft.com/prod/user/3f91e08b-004a-41b2-a73a-e58ccfd3e774/a4d21d11-42d7-4a92-9a73-1489c61468af/image/image0_0.jpg?Expires=1709711684&Signature=ZLeBAJ1CNdHIJ~2GT9pRjbU-JETkIywTiZvKgMQUXJsasW9tXEJrZsTHWVef0rM1CVBychgAbEvUOT5ZieE35MZjFcM9fKLwDk3NJAQ4ju4TPdv2wzjE2-N4Uo3R7kD59Fha2HIKdaHqq7ahm7nWxztSvgBvEo5oocpD8gBKHCbQ2~oadG-JJlohT3jNmx5Su2pkaa8MQWasS7UgdZH8OEqOHI7S3GyjvqXZiJtaxjUYfZ7jBIY7J8FjUvaGM33fiZBALoYXgbVZHx3Uho62vJ8SDTTDr9lXaawf7feaco5~2jd4~Qe~9jSEL86gW295qnCxTsV3UvlLYrf5gxUPZg__&Key-Pair-Id=K3RDDB1TZ8BHT8"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);

export default ListElement;
