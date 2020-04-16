import React, { useState } from "react";
import MenuComponent from "./MenuComponent";
import DishDetailComponent from "./DishDetailComponent";
import DISHES from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

function Main() {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="App">
      <Header />
      <MenuComponent
        dishes={dishes}
        onClick={(dishId) => setSelectedDish(dishId)}
      />
      <DishDetailComponent
        selectedDish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      />
      <Footer />
    </div>
  );
}

export default Main;
