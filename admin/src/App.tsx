import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";
import { loginSelect } from "./src/features/login/userLoginSlice";
import styles from "./app.module.scss";
import {
  AddArticleLayout,
  RegisterLayout,
  LoginLayout,
  Article,
} from "./src/components/components";
import { useSelector } from "react-redux";
import { authSelect } from "./src/features/auth/userRegisterSlice";

function ProtectedRoutes() {
  const isLoggedIn = useSelector(loginSelect);
  const isAuthenticated = useSelector(authSelect);
  return isLoggedIn || isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const isLoggedIn = useSelector(loginSelect);
  const isAuthenticated = useSelector(authSelect);
  return (
    <Router>
      <div className={styles.app_container}>
        {isLoggedIn || isAuthenticated?.token ? (
          <div style={{ display: "flex" }}>
            <VerticalNavbar />{" "}
            <div
              style={{
                maxWidth: "25rem",
                minWidth: "25rem",
              }}
            ></div>
          </div>
        ) : null}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<UserItem />} />
            <Route path="/articles" element={<AddArticleLayout />} />
            <Route path="/articles/:id" element={<Article />} />
          </Route>
          <Route path="/register" element={<RegisterLayout />} />
          <Route path="/login" element={<LoginLayout />} />
          {isLoggedIn ? null : (
            <Route path="/login" element={<LoginLayout />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
