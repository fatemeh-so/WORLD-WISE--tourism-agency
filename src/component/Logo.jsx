import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div>
      <Link to="/">
       
        <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
      </Link>
    </div>
  );
}

export default Logo;
