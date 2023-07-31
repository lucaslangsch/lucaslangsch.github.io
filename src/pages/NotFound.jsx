import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>OOPS! Página não encontrada. Por favor volte pra página inicial</h1>
      <Link to='/'>VOLTAR</Link>
    </>

  );
}

export default NotFound;