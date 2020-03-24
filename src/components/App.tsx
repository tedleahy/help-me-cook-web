import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import RecipeList from "./RecipeList";
import { Container, Row, Col } from "react-bootstrap";
import { Recipe } from "../common/types";
import ShoppingList from "./ShoppingList";

interface ApiResponse {
  data: Recipe[];
}

export default function App() {
  const [recipes, setRecipes] = useState([] as Recipe[]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes_with_ingredients")
      .then((response: AxiosResponse<ApiResponse>) => {
        const recipes = response.data.data;
        setRecipes(recipes);
      })
      .catch((error: AxiosError) => console.error(error));
  }, []);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-center">All Recipes</h1>
          <RecipeList recipes={recipes} />
        </Col>
        <Col>
          <h1 className="text-center">Shopping List</h1>
          <ShoppingList />
        </Col>
      </Row>
    </Container>
  );
}
