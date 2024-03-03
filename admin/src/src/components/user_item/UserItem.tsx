import UserList from "../user_list/UserList";
import ButtonElement from "../button/ButtonElement";

import { PlusCircleOutlined } from "@ant-design/icons";
import styles from "./user_item.module.scss";

const UserItem = () => {
  const customStyles = { backgroundColor: "#52d64b" };
  return (
    <>
      <div className={styles.outer_box_user_item}>
        <div className={styles.button_frame}>
          <ButtonElement
            style={customStyles}
            type="primary"
            text="Add user"
            icon={<PlusCircleOutlined />}
          />
        </div>
        <UserList />
      </div>
    </>
  );
};

export default UserItem;
