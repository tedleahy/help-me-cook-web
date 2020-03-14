import React from "react";
import { ListGroup } from "react-bootstrap";

export interface Recipe {
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

interface RecipeProps {
  recipes: Recipe[];
}

export default function RecipeList(props: RecipeProps) {
  return (
    <ListGroup>
      {props.recipes.map(recipe => {
        // return <li key={recipe?.["id"]}>{recipe?.["name"]}</li>;
        return <ListGroup.Item>{recipe?.["name"]}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}
