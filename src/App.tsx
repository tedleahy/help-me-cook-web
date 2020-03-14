import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import RecipeList, { Recipe } from "./RecipeList";
import { Container } from "react-bootstrap";

interface ApiResponse {
  data: Recipe[];
}

export default function App() {
  const [recipes, setRecipes] = useState([] as Recipe[]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then((response: AxiosResponse<ApiResponse>) => {
        const recipes = (response.data as unknown) as Recipe[];
        setRecipes(recipes);
      })
      .catch((error: AxiosError) => console.error(error));
  }, []);

  return (
    <Container>
      <h1 className="my-4">All Recipes</h1>
      <RecipeList recipes={recipes} />
    </Container>
  );
}
