import { ChangeEvent, useState } from "react";
import { DownOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import useModalState from "../../hooks/useModalState";
import {
  ModalElement,
  TextEditor,
  InputElement,
  ButtonsFooterElement,
  Articles,
  ButtonElement,
} from "../components";
import { programmingLanguages, techTags } from "../../utils/optionsTagsData.ts";
import styles from "./add_article_layout.module.scss";
import {
  BtnHtmlType,
  BtnJustifyType,
  ProgrammingLanguage,
  TechTag,
} from "../../enums/enums";
import useDropDownSelectState from "../../hooks/useDropDownSelectState.ts";
import {
  fetchArticlesAsync,
  postArticlesAsync,
} from "../../features/articles/articleSlices";

interface IUserInfoPayload extends JwtPayload {
  userId: number;
}
const AddArticleLayout = () => {
  const { open, showModal, handleOk, handleCancel, setOpen } = useModalState();
  const [editorContent, setEditorContent] = useState("");
  const [selectedPLanguage, setPLanguage] = useState("");
  const [selectedTechTag, setTechTach] = useState("");
  const { getSelectedValue } = useDropDownSelectState();
  const [title, setTitle] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const getImgURL = (e: ChangeEvent<HTMLInputElement>) => {
    setimgUrl(e.target.value);
  };

  const addArticle = () => {
    if (token) {
      const userInfo = jwtDecode<IUserInfoPayload>(token);
      dispatch(
        postArticlesAsync({
          articleData: {
            title,
            body: editorContent,
            photo: imgUrl,
            techTag: selectedTechTag as TechTag,
            programmingLanguage: selectedPLanguage as ProgrammingLanguage,
          },
          userId: userInfo?.userId,
          token: token,
        })
      ).then(() => {
        dispatch(fetchArticlesAsync());
        setOpen(false);
      });
    }
  };

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
                <InputElement value={title} onChange={handleInputChange} />
                <Dropdown
                  menu={{
                    items: programmingLanguages,
                    selectable: true,
                    defaultSelectedKeys: ["4"],
                    onSelect: (item) =>
                      setPLanguage(
                        getSelectedValue(item, programmingLanguages)
                      ),
                  }}
                >
                  <Typography.Link>
                    <Space>
                      Programming language
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
                <Dropdown
                  menu={{
                    items: techTags,
                    selectable: true,
                    defaultSelectedKeys: ["4"],
                    onSelect: (item) =>
                      setTechTach(getSelectedValue(item, techTags)),
                  }}
                >
                  <Typography.Link>
                    <Space>
                      Technologies
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
                <Typography.Title style={{ marginTop: "1rem" }} level={5}>
                  Image URL
                </Typography.Title>
                <InputElement value={imgUrl} onChange={getImgURL} />
                <Typography.Title style={{ marginTop: "1rem" }} level={5}>
                  Content
                </Typography.Title>
                <TextEditor setEditorContent={setEditorContent} />
              </>
            }
            footer={
              <>
                <ButtonsFooterElement
                  submit={addArticle}
                  justify={BtnJustifyType.END}
                  style={{ marginLeft: "0.75rem" }}
                  htmlType={[BtnHtmlType.BUTTON, BtnHtmlType.SUBMIT]}
                  textCancel={"Cancel"}
                  textSubmit={"Submit"}
                />
              </>
            }
          />
        </div>
        <Articles />
      </div>
    </>
  );
};

export default AddArticleLayout;
