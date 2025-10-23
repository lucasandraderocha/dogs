import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { POST_PHOTO } from "../../api";

import useForm from "../../components/login/hooks/useForm";
import useFetch from "../../hooks/useFetch";

import styles from "./UserPhotoPost.module.css";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Button from "../../components/form/Button";
import Error from "../../components/helper/Error";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/account");
  }, [data, navigate]);
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    const token = window.localStorage.getItem("token");
    const { url, options } = POST_PHOTO(formData, token);

    request(url, options);
  };
  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <>
      <section className={`${styles.photoPost} animeLeft`}>
        <form onSubmit={handleSubmit}>
          <Label>
            <p>Título</p>
            <Input
              type="text"
              value={nome.value}
              onChange={nome.onChange}
              onBlur={nome.onBlur}
              error={nome.error}
              name="titulo"
            />
          </Label>
          <Label>
            <p>Idade</p>
            <Input
              type="number"
              value={idade.value}
              onChange={idade.onChange}
              onBlur={idade.onBlur}
              error={idade.error}
              name="idade"
            />
          </Label>
          <Label>
            <p>Peso</p>
            <Input
              type="number"
              value={peso.value}
              onChange={peso.onChange}
              onBlur={peso.onBlur}
              error={peso.error}
              name="peso"
            />
          </Label>
          <Label>
            <p>Arquivo</p>
            <Input
              type="file"
              accept="image/*"
              name="img"
              id="img"
              onChange={handleImgChange}
            />
          </Label>
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          {error && <Error error={error} />}
        </form>
        <section>
          {img.preview && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url("${img.preview}")` }}
            >
              <div>
                <p>{img.raw.name}</p>
              </div>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default UserPhotoPost;
