import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import { POST_COMMENT } from "../../api";

import Enviar from "../../Assets/enviar.svg?react";
import Error from "../helper/Error";

import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, onCommentRef }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async e => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = POST_COMMENT(token, id, { comment });
    let { res, json } = await request(url, options);
    if (res.ok) {
      setComment("");
      setComments(comments => [...comments, json]);
      onCommentRef.current.scrollTop = onCommentRef.current.scrollHeight;
    }
  };
  return (
    <>
      <form onSubmit={handleCommentSubmit} className={styles.form}>
        <textarea
          className={styles.textarea}
          id="comment"
          name="comment"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button className={styles.button}>
          <Enviar />
        </button>
      </form>
      {error && <Error error={error} />}
    </>
  );
};

export default PhotoCommentsForm;
