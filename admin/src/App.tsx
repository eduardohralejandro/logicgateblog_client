import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";
import ArticleLayout from "./src/components/article_layout/ArticleLayout";

import styles from "./app.module.scss";

function App() {
  return (
    <>
      <Router>
        <div className={styles.app_container}>
          <VerticalNavbar />
          <Routes>
            <Route path="/" element={<UserItem />} />
            <Route path="/articles" element={<ArticleLayout />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
