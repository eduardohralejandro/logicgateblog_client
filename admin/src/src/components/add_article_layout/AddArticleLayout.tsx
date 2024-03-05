import ButtonElement from "../button/ButtonElement";
import { PlusCircleFilled } from "@ant-design/icons";
import ListElement from "../list_element/ListElement";

import styles from "./add_article_layout.module.scss";

const AddArticleLayout = () => {
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
          />
        </div>
        <ListElement />
      </div>
    </>
  );
};

export default AddArticleLayout;
