import Button from "../button";
import "./style.css";

export default function Search() {
    return (
        <section className="search_container">
            <h2>Nosso objetivo é servir você</h2>

            <div className="container_input">
                <input type="text" placeholder="Encontre um restaurante perto de você" />
                <Button title="Encontrar"/>
            </div>
        </section>
    );
}
