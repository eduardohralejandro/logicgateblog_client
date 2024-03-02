import { UserOutlined, ReadOutlined } from "@ant-design/icons";

import Logo from "../logo/Logo";
import styles from "./nav_bar_links.module.scss";


const NavBarLinks = () => {
  const customStyles = { fontSize: "1rem", color: "white" };
  return (
    <nav>
      <Logo />
      <div className={styles.outer_link_box}>
        <UserOutlined style={customStyles} />
        <a className={styles.links_nav} href="#home">
          <p>Users</p>
        </a>
      </div>
      <div className={styles.outer_link_box}>
        <ReadOutlined style={customStyles} />
        <a className={styles.links_nav} href="#article">
          <p>Articles</p>
        </a>
      </div>
    </nav>
  );
};

export default NavBarLinks;
