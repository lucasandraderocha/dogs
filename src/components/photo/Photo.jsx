import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { GET_PHOTO } from "../../api";
import Loading from "../helper/Loading";
import Error from "../helper/Error";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_PHOTO(id);
    request(url, options);
    console.log(data);
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
      <img src={data.src} alt={`A foto postada por ${data.author}`} />
    </div>
  );
};

export default Photo;
