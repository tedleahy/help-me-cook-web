import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Router } from "@reach/router";
import CreateShoppingList from "./create-shopping-list/CreateShoppingList";
import SearchRecipesByIngredients from "./search-recipes-by-ingredients/SearchRecipesByIngredients";
import { Navbar, Nav } from "react-bootstrap";
import AllRecipes from "./recipes/AllRecipes";
import NewRecipe from "./recipes/NewRecipe";

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">HelpMeCook</Navbar.Brand>
        <Nav>
          <Nav.Link href="/recipes">All Recipes</Nav.Link>
          <Nav.Link href="/search-recipes-by-ingredients">Search Recipes</Nav.Link>
          <Nav.Link href="/create-shopping-list">Create Shopping List</Nav.Link>
        </Nav>
      </Navbar>

      <div className="p-3">
        <Router>
          <SearchRecipesByIngredients path="/search-recipes-by-ingredients" />
          <CreateShoppingList path="/create-shopping-list" />
          <AllRecipes path="/recipes" />
          <NewRecipe path="/recipes/new" />
        </Router>
      </div>
    </>
  );
}
