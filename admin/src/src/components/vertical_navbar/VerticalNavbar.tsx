import styles from "./vertical-navbar.module.scss";
import NavBarLinks from "../navbar_links/NavBarLinks";

const VerticalNavbar = () => {
  return (
    <>
      <div className={styles.navbar_outer_box}>
        <NavBarLinks />
      </div>
    </>
  );
};

export default VerticalNavbar;
