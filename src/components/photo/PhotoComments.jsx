import { useContext, useEffect, useRef, useState } from "react";

import UserContext from "../../UserContext";

import PhotoCommentsForm from "./PhotoCommentsForm";

import styles from "./PhotoComments.module.css";

const PhotoComments = ({ comments, id }) => {
  const [lateComments, setLateComments] = useState(() => comments);
  const commentSectionRef = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentSectionRef.current.scrollTop =
      commentSectionRef.current.scrollHeight;
  }, [lateComments]);
  return (
    <>
      <section className={styles.comment}>
        <div
          className={
            lateComments.length < 6
              ? `${styles.displayingLessComments} ${styles.scrollbarComment}`
              : `${styles.displayingMoreComments} ${styles.scrollbarComment}`
          }
        >
          <ul ref={commentSectionRef}>
            {lateComments.length > 10 ? (
              <li style={{ height: "1.5rem" }}></li>
            ) : (
              ""
            )}
            {lateComments.map(
              ({
                comment_ID,
                comment_author,
                comment_content,
                comment_date,
              }) => {
                const date = new Date(comment_date);
                const formattedDate = new Intl.DateTimeFormat("pt-BR", {
                  weekday: "long",
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                }).format(date);
                return (
                  <li key={comment_ID} className={styles.singleComment}>
                    <div>
                      <h1>@{comment_author}</h1>
                      <span className={styles.postedAt}>{formattedDate}</span>
                    </div>
                    <p>{comment_content}</p>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div>
          {login && (
            <PhotoCommentsForm
              id={id}
              setComments={setLateComments}
              onCommentRef={commentSectionRef}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default PhotoComments;
