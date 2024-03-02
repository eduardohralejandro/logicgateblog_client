import UserList from "../user_list/UserList";

import styles from './user_item.module.scss';



const UserItem = () => {
  return (
    <>
      <div className={styles.outer_box_user_item}>
        <UserList />
      </div>
    </>
  );
};

export default UserItem;
