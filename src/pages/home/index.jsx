import Header from "../../components/header";
import Search from "../../components/search";
import Button from "../../components/button";
import CardCategory from "../../components/cards-category";
import Restaurants from "../../components/restaurants";

import "./style.css";

export default function Home() {
    return (
      <div>
        <Header />
        <Search />
        <div className="home_name_category">
          <CardCategory title="Comidas"/>
          <CardCategory title="Bebidas"/>
        </div>
      <Restaurants/>
        
      </div>
    );
}
