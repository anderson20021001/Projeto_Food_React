import "./style.css";

const RESTAURANTES = [
    {
        id: 1,
        title: "Restaurante Sabor da Terra",
        category: "Comida Brasileira",
        color: "yellow"
    },
    {
        id: 2,
        title: "Pizza Italiana",
        category: "Pizzaria",
        color: "red"
    },
    {
        id: 3,
        title: "Sushi Maru",
        category: "Comida Japonesa",
        color: "blue"
    },
    {
        id: 4,
        title: "Burgers & Co.",
        category: "Hamburgueria",
        color: "green"
    },
    {
        id: 5,
        title: "Café Central",
        category: "Cafeteria",
        color: "brown"
    },
    {
        id: 6,
        title: "Vegan Delight",
        category: "Comida Vegana",
        color: "purple"
    },
    {
        id: 7,
        title: "Frutos do Mar",
        category: "Mariscos",
        color: "aqua"
    },
    {
        id: 8,
        title: "Churrasco Gaúcho",
        category: "Churrascaria",
        color: "orange"
    }
];

export default function Restaurants() {
    return (
        <div className="restaurants_container">
            <h1>Conheça os nossos restaurantes</h1>

            <div className="container_cards">
               {RESTAURANTES.map((item) => (
                   <RestaurantCard
                       key={item.id}  // Adiciona uma key para cada elemento da lista
                       title={item.title}
                       category={item.category}
                       color={item.color}
                   />
               ))}
            </div>
        </div>
    );
}

function RestaurantCard({ title, category, color }) {
    return (
        <div className="restaurant_card">
            <div className="avatar" style={{ backgroundColor: color || 'grey' }} />
            <div className="content_info">
                <p>{title}</p>
                <p>{category}</p>
            </div>
        </div>
    );
}
