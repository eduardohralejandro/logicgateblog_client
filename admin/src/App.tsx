import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";
import { selectIsAuthenticated } from "./src/features/auth/userRegisterSlice";
import styles from "./app.module.scss";
import {
  AddArticleLayout,
  FormElement,
  Login,
  RegisterLayout,
} from "./src/components/components";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/register" />;
}

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const designProps = { labelCol: 6, wrapperCol: 8 };
  const customFormStyle = {
    width: "20rem",
    border: "1px solid #d1d1d1",
    padding: "1rem",
    borderRadius: "6px",
  };

  return (
    <Router>
      <div className={styles.app_container}>
        {!isAuthenticated ? null : <VerticalNavbar />}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<UserItem />} />
            <Route path="/articles" element={<AddArticleLayout />} />
          </Route>
          <Route path="/register" element={<RegisterLayout />} />
          <Route
            path="/login"
            element={
              <FormElement
                {...designProps}
                style={customFormStyle}
                name="basic"
                layout="vertical"
                children={<Login />}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
