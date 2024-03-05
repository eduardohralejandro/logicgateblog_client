import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";

import styles from "./app.module.scss";
import ListElement from "./src/components/list_element/ListElement";

function App() {
  return (
    <>
      <Router>
        <div className={styles.app_container}>
          <VerticalNavbar />
          <Routes>
            <Route path="/" element={<UserItem />} />
            <Route path="/articles" element={<ListElement />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
