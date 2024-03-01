import styles from './nav_bar_links.module.scss';


const NavBarLinks = () => {
  return (
    <nav>
      <a className={styles.links_nav} href="#home">Users</a>
      <a className={styles.links_nav} href="#article">Articles</a>
    </nav>
  );
};

export default NavBarLinks;
