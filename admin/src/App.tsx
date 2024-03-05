import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";

import styles from "./app.module.scss";
import AddArticleLayout from './src/components/add_article_layout/AddArticleLayout';


function App() {
  return (
    <>
      <Router>
        <div className={styles.app_container}>
          <VerticalNavbar />
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
