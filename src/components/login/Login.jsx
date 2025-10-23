import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../../UserContext";

import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../../NotFound";

import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/account" />;

  return (
    <>
      <section className={styles.login}>
        <div className={styles.forms}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="create" element={<LoginCreate />} />
            <Route path="lost" element={<LoginPasswordLost />} />
            <Route path="reset" element={<LoginPasswordReset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default Login;
