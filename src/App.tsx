import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface ApiResponse {
  data: Recipe[];
}

interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  instructions: string[];
}

interface Ingredient {
  name: string;
  amount: number;
  amount_unit: string;
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
    <div>
      <h1>All Recipes</h1>
      {recipes.map(recipe => {
        return <li key={recipe?.["id"]}>{recipe?.["name"]}</li>;
      })}
    </div>
  );
}
