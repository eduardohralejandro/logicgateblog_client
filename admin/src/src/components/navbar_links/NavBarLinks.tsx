import { UserOutlined, ReadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Logo from "../logo/Logo";
import styles from "./navbar.module.scss";

const NavBarLinks = () => {
  const customStyles = { fontSize: "1rem", color: "white" };
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.navbar__logo} />
      <div className={styles.navbar__containers}>
        <UserOutlined style={customStyles} />
        <Link className={styles.navbar__links} to="/">
          <p>Users</p>
        </Link>
      </div>
      <div className={styles.navbar__containers}>
        <ReadOutlined style={customStyles} />
        <Link className={styles.navbar__links} to="/articles">
          <p>Articles</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBarLinks;
