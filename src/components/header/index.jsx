import Button from "../button";
import "./style.css";

export default function Header() {
    return (
      <div>
        <header>
          <h1>UnyFood</h1>
          <nav>
            <ul>
              <li>Categorias</li>
              <li>Requerimentos</li>
              <li>Informações</li>
              <li>Cadastra-se</li>
              <li><Button title="Clique Aqui" /></li>
            </ul>
          </nav>
        </header>
      </div>
    );
}
