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
} from "./src/components/components";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const isLoggedIn = useSelector(loginSelect);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const isLoggedIn = useSelector(loginSelect);
  return (
    <Router>
      <div className={styles.app_container}>
        {!isLoggedIn ? null : <VerticalNavbar />}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<UserItem />} />
            <Route path="/articles" element={<AddArticleLayout />} />
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
