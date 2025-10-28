import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import { GET_PHOTOS } from "../../api";

import FeedPhotoItems from "./FeedPhotoItems";
import Loading from "../helper/Loading";

import styles from "./FeedPhoto.module.css";

const FeedPhoto = ({ user, page, setInfinite }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3;
      const { url, options } = GET_PHOTOS({ page, total, user });

      const { res, json } = await request(url, options);

      if (res && res.ok && json.length < total) setInfinite(false);
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <ul className={`${styles.feed}`}>
          {data.map((photo) => (
            <FeedPhotoItems key={photo.id} photo={photo} />
          ))}
        </ul>
      </>
    );
};

export default FeedPhoto;
