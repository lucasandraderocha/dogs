import { useNavigate } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { DELETE_PHOTO } from "../../api";

import Error from "../helper/Error";

import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  const handleDeleteClick = async () => {
    const token = window.localStorage.getItem("token");
    const { url, options } = DELETE_PHOTO(id, token);

    await request(url, options);
    navigate("/");
  };

  return (
    <>
      {error && <Error error={error} />}
      {loading ? (
        <button disabled>Excluindo...</button>
      ) : (
        <button className={styles.delete} onClick={handleDeleteClick}>
          Excluir
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
