import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import RecipeList from "./RecipeList";
import { Container, Row, Col } from "react-bootstrap";
import { Recipe, Ingredient, TShoppingList } from "../common/types";
import ShoppingList, {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList
} from "./ShoppingList";

interface ApiResponse {
  data: Recipe[];
}

export default function App() {
  const [recipes, setRecipes] = useState([] as Recipe[]);
  const [shoppingList, setShoppingList] = useState(new Map<number, Ingredient>());

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes_with_ingredients")
      .then((response: AxiosResponse<ApiResponse>) => {
        const recipes = response.data.data;
        setRecipes(recipes);
      })
      .catch((error: AxiosError) => console.error(error));
  }, []);

  const toggleInShoppingList = (ingredients: Ingredient[], alreadyAdded: boolean): void => {
    const reducer = (accumulator: TShoppingList, currIngredient: Ingredient): TShoppingList => {
      accumulator = alreadyAdded
        ? removeIngredientFromShoppingList(accumulator, currIngredient)
        : addIngredientToShoppingList(accumulator, currIngredient);
      return accumulator;
    };
    //
    setShoppingList(ingredients.reduce(reducer, new Map(shoppingList)));
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-center">All Recipes</h1>
          <RecipeList
            recipes={recipes}
            shoppingList={shoppingList}
            toggleInShoppingList={toggleInShoppingList}
          />
        </Col>
        <Col>
          <h1 className="text-center">Shopping List</h1>
          <ShoppingList shoppingList={shoppingList} />
        </Col>
      </Row>
    </Container>
  );
}
