import ButtonElement from "../button/ButtonElement";
import { PlusCircleFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { ListElement } from "../components";

import useModalState from "../../hooks/useModalState";
import { ModalElement, TextEditor, InputElement } from "../components";

import styles from "./add_article_layout.module.scss";

const AddArticleLayout = () => {
  const { open, showModal, handleOk, handleCancel } = useModalState();

  const customStyles = {
    backgroundColor: "#52d64b",
    color: "white",
    width: "8rem",
    alignSelf: "flex-end",
    marginRight: "1.5rem",
    marginBottom: "2rem",
  };
  return (
    <>
      <div className={styles.outer_box_arl}>
        <div className={styles.header_add_article}>
          <h3>Articles</h3>
          <ButtonElement
            style={customStyles}
            text="Add article"
            icon={<PlusCircleFilled />}
            onClick={showModal}
          />
          <ModalElement
            title="Add article"
            open={open}
            handleCancel={handleCancel}
            handleOk={handleOk}
            children={
              <>
                <Typography.Title level={5}>Title</Typography.Title>
                <InputElement />
                <Typography.Title style={{ marginTop: "1rem" }} level={5}>
                  Content
                </Typography.Title>
                <TextEditor />
              </>
            }
            footer={<footer>Footer goes here</footer>}
          />
        </div>
        <ListElement />
      </div>
    </>
  );
};

export default AddArticleLayout;
