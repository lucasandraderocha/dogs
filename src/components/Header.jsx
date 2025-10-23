import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import Dogs from "../Assets/dogs.svg?react";
import { useContext } from "react";
import UserContext from "../UserContext";
import Button from "./form/Button";

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <>
      <div className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <Link className={styles.logo} to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
          {data ? (
            <>
              <Link className={styles.login} to="/account">
                {data.username}
              </Link>
              <Button onClick={userLogout}>Logout</Button>
            </>
          ) : (
            <Link className={styles.login} to="/login">
              Login/Criar
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
