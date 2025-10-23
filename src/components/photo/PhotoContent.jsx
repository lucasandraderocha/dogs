import { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../UserContext";

import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";

import styles from "./PhotoContent.module.css";
import Image from "../helper/Image";

const PhotoContent = ({ data, type }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <section
      className={
        type === "single"
          ? `${styles.photo} ${styles.single}`
          : `${styles.photo}`
      }
    >
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <section className={styles.author}>
            <p>
              {user.data && user.data.username === photo.author ? (
                <PhotoDelete id={photo.id} />
              ) : (
                <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              )}
            </p>
            <span className={styles.views}>{photo.acessos}</span>
          </section>
          <section className={styles.attributes}>
            <h1 className={`${styles.modalTitle} animeLeft hoverLetter`}>
              <Link to={`/picture/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul>
              <li>{photo.peso}kg</li>
              <li>
                {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}
              </li>
            </ul>
          </section>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </section>
  );
};

export default PhotoContent;
