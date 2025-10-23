import { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";
const UserHeader = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/account/":
        break;
      case "/account/post":
        setTitle("Adicionar Foto");
        break;
      case "/account/stats":
        setTitle("Minhas Estatísticas");
        break;
      default:
        setTitle("Minhas Fotos");
        return;
    }
  }, [pathname]);
  return (
    <>
      <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <UserHeaderNav />
      </header>
    </>
  );
};

export default UserHeader;
