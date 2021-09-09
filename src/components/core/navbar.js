import React from "react";
import { Link } from "react-router-dom";
import "../../components_css/core_css/navbar.css";
import {makeStyles} from '@material-ui/core/styles';
const NavBar = () => {
  const useStyles = makeStyles({
    list:{color:"white",textDecoration:"none",margin:"0 10px 0 0"}
  });
  const styles = useStyles();
  return (
    <div id="navbar-layout">
      <nav>
        <ul>
          <Link to="/" className={styles.list}>Home</Link>
          <Link to="/login" className={styles.list}>Login</Link>
          <Link to="/signup" className={styles.list}>SignUp</Link>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
