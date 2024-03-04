import { UserOutlined, ReadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Logo from "../logo/Logo";
import styles from "./nav_bar_links.module.scss";

const NavBarLinks = () => {
  const customStyles = { fontSize: "1rem", color: "white" };
  return (
    <nav>
      <Logo />
      <div className={styles.outer_link_box}>
        <UserOutlined style={customStyles} />
        <Link className={styles.links_nav} to="/">
          <p>Users</p>
        </Link>
      </div>
      <div className={styles.outer_link_box}>
        <ReadOutlined style={customStyles} />
        <Link className={styles.links_nav} to="/articles">
          <p>Articles</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBarLinks;
