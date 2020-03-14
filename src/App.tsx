import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import RecipeList, { Recipe } from "./RecipeList";

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
    <>
      <h1>All Recipes</h1>
      <RecipeList recipes={recipes} />
    </>
  );
}
