import { useState, MouseEvent, FC } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { RouteProps } from 'react-router-dom';

import UserList from "../user_list/UserList";
import ButtonElement from "../button/ButtonElement";
import ModalElement from "../modal/ModalElement";
import AddUserLayout from "../add_user_layout/AddUserLayout";
import AddUserFooterLayout from "../add_user_footer_layout/AddUserFooterLayout";

import styles from "./user_item.module.scss";

const UserItem: FC<RouteProps> = () => {
  const customStyles = { backgroundColor: "#52d64b" };

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (event: MouseEvent<HTMLElement>) => {
    console.log(event);
    setOpen(false);
  };

  const handleCancel = (event: MouseEvent<HTMLElement>) => {
    console.log(event);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.outer_box_user_item}>
        <div className={styles.button_frame}>
          <ButtonElement
            style={customStyles}
            type="primary"
            text="Add user"
            icon={<PlusCircleOutlined />}
            onClick={showModal}
          />
          <ModalElement
            title="Add new user"
            open={open}
            handleCancel={handleCancel}
            handleOk={handleOk}
            children={<AddUserLayout />}
            footer={<AddUserFooterLayout />}
          />
        </div>
        <UserList />
      </div>
    </>
  );
};

export default UserItem;
