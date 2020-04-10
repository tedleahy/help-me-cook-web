import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import RecipeList from "./RecipeList";
import { Row, Col } from "react-bootstrap";
import { Recipe } from "../../common/types";
import ShoppingList from "./ShoppingList";
import { RouteComponentProps } from "@reach/router";

interface ApiResponse {
  data: Recipe[];
}

export default function CreateShoppingList(props: RouteComponentProps) {
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
  );
}
