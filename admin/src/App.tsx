import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";

import styles from "./app.module.scss";
import AddArticleLayout from "./src/components/add_article_layout/AddArticleLayout";
import TextEditor from "./src/components/text_editor/TextEditor";
import { useCurrentEditor } from "@tiptap/react";

function App() {
  const { editor } = useCurrentEditor();
  return (
    <>
      <Router>
        <div className={styles.app_container}>
          <VerticalNavbar />
          {/* <TextEditor />  text editor to be added*/}
          <Routes>
            <Route path="/" element={<UserItem />} />
            <Route path="/articles" element={<AddArticleLayout />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
