import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Router } from "@reach/router";
import CreateShoppingList from "./create-shopping-list/CreateShoppingList";
import SearchRecipesByIngredients from "./search-recipes-by-ingredients/SearchRecipesByIngredients";

export default function App() {
  return (
    <Router>
      <SearchRecipesByIngredients path="/" />
      <CreateShoppingList path="/create-shopping-list" />
      {/* <SearchRecipesByIngredients path="/search-recipes-by-ingredients" /> */}
    </Router>
  );
}
