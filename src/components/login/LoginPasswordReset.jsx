import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import useForm from "./hooks/useForm";
import useFetch from "../../hooks/useFetch";

import { RESET_PASSWORD } from "../../api";

import Input from "../form/Input";
import Button from "../form/Button";
import Label from "../form/Label";
import Error from "../helper/Error";
import Head from "../helper/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const {
      location: { search },
    } = window;

    const params = new URLSearchParams(search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = RESET_PASSWORD({
        login,
        key,
        password: password.value,
      });
      const { res } = await request(url, options);
      if (res.ok) navigate("/login");
    }
  };
  return (
    <>
      <Head
        title="Redefinição de Senha"
        description="Recdefina sua senha e volte a compartilhar as melhores fotos do seu melhor amigo no Dogs."
      />
      <section className="container animeLeft">
        <h1 className="title">Redefição de Senha</h1>
        <form onSubmit={handleSubmit}>
          <Label>
            Insira sua nova senha:
            <Input
              type="password"
              name="password"
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
              error={password.error}
            />
          </Label>
          {loading ? (
            <Button disabled>Redefinindo...</Button>
          ) : (
            <Button>Redefinir Senha</Button>
          )}
        </form>
        <Error error={error} />
      </section>
    </>
  );
};

export default LoginPasswordReset;
