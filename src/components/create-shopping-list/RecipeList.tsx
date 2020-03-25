import React from "react";
import { ListGroup } from "react-bootstrap";
import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../../common/types";

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList(props: RecipeListProps) {
  return (
    <ListGroup>
      {props.recipes.map(recipe => {
        return <RecipeListItem key={recipe.id} recipe={recipe} />;
      })}
    </ListGroup>
  );
}
