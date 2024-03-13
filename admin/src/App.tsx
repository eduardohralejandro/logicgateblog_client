import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";

import styles from "./app.module.scss";
import {
  Register,
  AddArticleLayout,
  FormElement,
} from "./src/components/components";

function App() {
  const designProps = { labelCol: 6, wrapperCol: 8 };
  return (
    <>
      <Router>
        <div className={styles.app_container}>
          <VerticalNavbar />
          <Routes>
            <Route path="/" element={<UserItem />} />
            <Route path="/articles" element={<AddArticleLayout />} />
            <Route
              path="/register"
              element={
                <>
                  <FormElement
                    {...designProps}
                    style={{
                      width: "20rem",
                      border: "1px solid #d1d1d1",
                      padding: "1rem",
                      borderRadius: "6px",
                    }}
                    name="basic"
                    layout="vertical"
                    children={<Register />}
                  />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
