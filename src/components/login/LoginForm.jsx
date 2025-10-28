import { Link } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../../UserContext";

import useForm from "./hooks/useForm";

import Input from "../form/Input";
import Label from "../form/Label";
import Button from "../form/Button";
import Error from "../helper/Error";

import styles from "./LoginForm.module.css";
import Head from "../helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <>
      <Head
        title="Login"
        description="Faça o login e compartilhe as melhores fotos do seu melhor amigo no Dogs."
      />
      <section className="animeLeft">
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Label>
            <p>Username</p>
            <Input
              type="text"
              value={username.value}
              onChange={username.onChange}
              onBlur={username.onBlur}
              error={username.error}
            />
          </Label>
          <Label>
            <p>Password</p>
            <Input
              type="password"
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
              error={password.error}
            />
          </Label>
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}

          {error && (
            <Error
              error={error && "Dados incorretos. Por favor, tente novamente."}
            />
          )}
        </form>
        <section>
          <Link className={styles.resetPassword} to="/login/lost">
            Recuperar Senha?
          </Link>
          <div className={styles.createAccount}>
            <h2 className={styles.subtitle}>
              Ainda <i>não</i> possui conta?
            </h2>
            <p>Cadastre-se agora mesmo</p>
            <Link to="/login/create">Cadastrar-se</Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginForm;
