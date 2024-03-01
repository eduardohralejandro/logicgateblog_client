enum AuthorRole {
  ADMIN,
  REGULAR,
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
    authorRole: AuthorRole.ADMIN,
  },
];


const UserList = () => {
  return (
    <>
      {users?.map((user: IAuthor) => {
        return (
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.authorRole}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
