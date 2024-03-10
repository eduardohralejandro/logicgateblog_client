import styles from "./vertical_navbar.module.scss";
import NavBarLinks from "../navbar_links/NavBarLinks";

const VerticalNavbar = () => {
  return (
    <>
      <div className={styles.vertical_navbar}>
        <NavBarLinks />
      </div>
    </>
  );
};

export default VerticalNavbar;
