import { FC } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { RouteProps } from "react-router-dom";

import {
  UserList,
  ButtonElement,
  ModalElement,
  AddUserLayout,
  AddUserFooterLayout,
  HeaderElement,
} from "../components";
import { HeaderSize } from "../../enums/enums";
import useModalState from "../../hooks/useModalState";

import styles from "./user_item.module.scss";

const UserItem: FC<RouteProps> = () => {
  const customStyles = { backgroundColor: "#52d64b" };
  const { open, showModal, handleOk, handleCancel } = useModalState();

  return (
    <>
      <div className={styles.outer_box_user_item}>
        <div className={styles.button_frame}>
          <HeaderElement title="Users" level={HeaderSize.H5} />
          <ButtonElement
            style={customStyles}
            type="primary"
            text="Add user"
            icon={<PlusCircleFilled />}
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
