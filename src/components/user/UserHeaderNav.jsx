import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import useMedia from "../../hooks/useMedia";
import UserContext from "../../UserContext";

import MyGallery from "../../Assets/feed.svg?react";
import PostPhoto from "../../Assets/adicionar.svg?react";
import MyStats from "../../Assets/estatisticas.svg?react";
import Logout from "../../Assets/sair.svg?react";

import styles from "./UserHeaderNav.module.css";
const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { userLogout } = useContext(UserContext);
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? styles.active : "")}
          end
        >
          <MyGallery />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink
          to="/account/post"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <PostPhoto />

          {mobile && "Adicionar Foto"}
        </NavLink>
        <NavLink
          to="/account/stats"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <MyStats />
          {mobile && "Estatísticas"}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
