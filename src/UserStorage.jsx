import { useCallback, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from "./api";

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [modalPhoto, setModalPhoto] = useState(null);

  const getUser = async token => {
    const { url, options } = GET_USER(token);

    const res = await fetch(url, options);
    const json = await res.json();

    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });

      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

      const { token } = await res.json();

      window.localStorage.setItem("token", token);

      await getUser(token);
      navigate("/account");
    } catch (err) {
      setError(err.message);
      console.log(err);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(async () => {
    setError(null);
    setData(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const res = await fetch(url, options);
          if (!res.ok) throw new Error("Error: Invalid token");
          await getUser(token);
        } catch (error) {
          const e = new Error(`Error: ${error}`);
          userLogout();
          setError(e.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };
    autoLogin();
  }, [userLogout]);
  return (
    <UserContext.Provider
      value={{
        data,
        error,
        loading,
        login,
        userLogin,
        userLogout,
        modalPhoto,
        setModalPhoto,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
