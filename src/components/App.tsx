import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Router } from "@reach/router";
import AllRecipes from "./all-recipes/AllRecipes";
import CreateShoppingList from "./create-shopping-list/CreateShoppingList";
import SearchRecipesByIngredients from "./search-recipes-by-ingredients/SearchRecipesByIngredients";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">HelpMeCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-links" />
        <Navbar.Collapse id="nav-links">
          <Nav>
            <Nav.Link href="/recipes">All Recipes</Nav.Link>
            <Nav.Link href="/search-recipes-by-ingredients">Search Recipes</Nav.Link>
            <Nav.Link href="/create-shopping-list">Create Shopping List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Router>
          <AllRecipes path="/recipes" />
          <SearchRecipesByIngredients path="/search-recipes-by-ingredients" />
          <CreateShoppingList path="/create-shopping-list" />
        </Router>
      </Container>
    </>
  );
}
