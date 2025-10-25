import { useContext, useEffect } from "react";

import useFetch from "../../hooks/useFetch";

import { GET_PHOTO } from "../../api";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../photo/PhotoContent";
import styles from "./FeedModal.module.css";
import UserContext from "../../UserContext";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();
  const { setModalPhoto } = useContext(UserContext);

  useEffect(() => {
    const { id } = photo;
    const { url, options } = GET_PHOTO(id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) return setModalPhoto(null);
  };

  return (
    <article className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </article>
  );
};

export default FeedModal;
