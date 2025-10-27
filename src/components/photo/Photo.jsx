import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { GET_PHOTO } from "../../api";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import PhotoContent from "./PhotoContent";
import Head from "../helper/Head";

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
      <>
        <Head
          title={data.photo.title}
          description="Encontre e Compartilhe as melhores fotos do seu melhor amigo no Dogs."
        />
        <div className="container">
          <PhotoContent data={data} type="single" />
        </div>
      </>
    );
};

export default Photo;
