import { useState } from "react";
import styles from "./Image.module.css";

const Image = ({ ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <>
      <section className={styles.wrapper}>
        {skeleton && <div className={styles.skeleton}></div>}
        <img onLoad={handleLoad} className={styles.image} {...props} />
      </section>
    </>
  );
};

export default Image;
