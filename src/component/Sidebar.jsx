import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

<Outlet/>
      {/* <p>list of cities</p> */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright { new Date().getFullYear()} WordWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
