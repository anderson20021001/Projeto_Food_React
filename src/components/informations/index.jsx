import React from 'react';
import "../button";
import "./style.css";
import img1 from "../../imgs/img3.png";
import img2 from "../../imgs/img4.png"; // Supondo que você tenha outra imagem

export default function Informations() {
    return (
        <div className="informations-container">
            <h1>Informações</h1>
            <div className="container-cards-info">
                <CardInfo image={img1} title="Lorem ipsum dolor sit amet" description="Descrição 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae feugiat odio. Pellentesque finibus sem eros, nec vestibulum orci pellentesque a. Duis id scelerisque diam. Vestibulum et convallis arcu." />
                <CardInfo image={img2} title="Lorem ipsum dolor sit amet" description="Descrição 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae feugiat odio. Pellentesque finibus sem eros, nec vestibulum orci pellentesque a. Duis id scelerisque diam. Vestibulum et convallis arcu." />
            </div>
        </div>
    );
}

function CardInfo({ image, title, description }) {
    return (
        <div className="card-info">
            <img src={image} alt="Imagem" />
            <div>
                <p className="card-title">{title}</p>
                <p className="card-description">{description}</p>
            </div>
            <Button title="Saiba Mais" />
        </div>
    );
}

function Button({ title }) {
    return (
        <button className="card-button">
            {title}
        </button>
    );
}
