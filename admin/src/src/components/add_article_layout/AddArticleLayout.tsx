import ButtonElement from "../button/ButtonElement";
import { PlusCircleFilled } from "@ant-design/icons";
import { Typography } from "antd";
import useModalState from "../../hooks/useModalState";
import {
  ModalElement,
  TextEditor,
  InputElement,
  ButtonsFooterElement,
  Articles,
} from "../components";

import styles from "./add_article_layout.module.scss";
import { BtnHtmlType, BtnJustifyType } from "../../enums/enums";

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
      <div className={styles.add_article_layout}>
        <div className={styles.add_article_layout__header}>
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
            footer={
              <ButtonsFooterElement
                justify={BtnJustifyType.END}
                style={{ marginLeft: "0.75rem" }}
                htmlType={[BtnHtmlType.BUTTON, BtnHtmlType.SUBMIT]}
                textCancel={"Cancel"}
                textSubmit={"Submit"}
              />
            }
          />
        </div>
        <Articles />
      </div>
    </>
  );
};

export default AddArticleLayout;
