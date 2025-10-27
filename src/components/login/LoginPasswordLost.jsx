import useForm from "./hooks/useForm";
import { LOST_PASSWORD } from "../../api";
import Input from "../form/Input";
import Button from "../form/Button";
import Label from "../form/Label";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";
import { Link } from "react-router-dom";
import Head from "../helper/Head";
const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });

      const { json } = await request(url, options);

      console.log(json);
    }
  };

  return (
    <>
      <Head
        title="Perdeu a Senha?"
        description="Recupere sua senha e volte a compartilhar as melhores fotos do seu melhor amigo no Dogs."
      />
      <section className="container animeLeft">
        <h1 className="title">Perdeu a Senha?</h1>
        {data ? (
          <section className="container animeLeft">
            <p>{data}</p>
            <Link to="/login">
              <Button>Voltar</Button>
            </Link>
          </section>
        ) : (
          <form onSubmit={handleSubmit}>
            <Label>
              Insira seu nome de usuário ou email:
              <Input
                type="text"
                name="login"
                value={login.value}
                onChange={login.onChange}
                onBlur={login.onBlur}
                error={login.error}
              />
            </Label>
            {loading ? (
              <Button disabled>Enviando...</Button>
            ) : (
              <Button>Enviar</Button>
            )}
            {error && <Error error={error} />}
          </form>
        )}
      </section>
    </>
  );
};

export default LoginPasswordLost;
