import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { GET_PHOTO } from "../../api";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_PHOTO(id);
    request(url, options);
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <div className="container">
        <PhotoContent data={data} type="single" />
        {/* <img src={data.src} alt={`A foto postada por ${data.author}`} /> */}
      </div>
    );
};

export default Photo;
