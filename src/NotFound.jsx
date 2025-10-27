import { Link } from "react-router-dom";
import Button from "./components/form/Button";
import Head from "./components/helper/Head";

const NotFound = () => {
  return (
    <>
      <Head
        title="404 - Página não encontrada"
        description="Parece que não encontramos nada relacionado a sua pesquisa ou página de destino. Por favor, tente novamente."
      />
      <div className="container">
        <h1 className="title">Erro: 404</h1>
        <p>Página não encontrada.</p>
        <Link to="/">
          <Button>Voltar para Home</Button>
        </Link>
      </div>
    </>
  );
};
export default NotFound;
