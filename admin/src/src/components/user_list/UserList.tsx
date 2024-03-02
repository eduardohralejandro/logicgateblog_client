import { Table, Tag } from "antd";
import type { TableProps } from "antd";

enum AuthorRole {
  ADMIN = "ADMIN",
  REGULAR = "REGULAR",
}

enum ColorRoleTag {
  RED = "red",
  GREEN = "green",
}

interface IAuthor {
  authorId: number;
  createdDate: Date;
  email: string;
  name: string;
  lastName: string;
  photo?: string;
  authorRole: AuthorRole;
}

// mock data, this will be passed via redux
const users: IAuthor[] = [
  {
    authorId: 1,
    createdDate: new Date(),
    email: "user1@gmail.com",
    name: "edu",
    lastName: "hernandez",
    photo: "optional",
    authorRole: AuthorRole.ADMIN,
  },
  {
    authorId: 2,
    createdDate: new Date(),
    email: "user2@gmail.com",
    name: "Leita",
    lastName: "hernandez",
    photo: "optional",
    authorRole: AuthorRole.REGULAR,
  },
];

const columns: TableProps<IAuthor>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Lastname",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    key: "authorRole",
    dataIndex: "authorRole",
    render: (authorRole: AuthorRole) => {
      const color: string = authorRole === AuthorRole.ADMIN ? ColorRoleTag.GREEN : ColorRoleTag.RED;
      return (
        <div>
          <Tag color={color} key={authorRole}>
            {authorRole.toString()}
          </Tag>
        </div>
      );
    },
  },
];

const UserList = () => {
  return <Table  columns={columns} dataSource={users}  />;
};

export default UserList;
