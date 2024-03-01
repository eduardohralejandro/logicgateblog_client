import UserItem from "./src/components/user_item/UserItem";
import VerticalNavbar from "./src/components/vertical_navbar/VerticalNavbar";

import styles from "./app.module.scss";


function App() {
  return (
    <>
      <div className={styles.app_container}>
        <VerticalNavbar />
        <UserItem />
      </div>
    </>
  );
}

export default App;
