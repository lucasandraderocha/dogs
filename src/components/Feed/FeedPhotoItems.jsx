import { useContext } from "react";
import Image from "../helper/Image";
import styles from "./FeedPhotoItems.module.css";
import UserContext from "../../UserContext";

const FeedPhotoItems = ({ photo }) => {
  const { setModalPhoto } = useContext(UserContext);

  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <>
      <li className={`${styles.photoItem}  animeLeft`} onClick={handleClick}>
        <Image src={photo.src} alt={photo.alt} />
        <span className={styles.viewItem}>{photo.acessos}</span>
      </li>
    </>
  );
};

export default FeedPhotoItems;
