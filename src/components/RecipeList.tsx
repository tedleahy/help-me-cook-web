import React from "react";
import { ListGroup } from "react-bootstrap";
import RecipeListItem from "./RecipeListItem";
import { Recipe, Ingredient, TShoppingList } from "../common/types";

interface RecipeListProps {
  recipes: Recipe[];
  shoppingList: TShoppingList;
  toggleInShoppingList: (ingredients: Ingredient[], alreadyAdded: boolean) => void;
}

export default function RecipeList(props: RecipeListProps) {
  return (
    <ListGroup>
      {props.recipes.map(recipe => {
        return (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            shoppingList={props.shoppingList}
            toggleInShoppingList={props.toggleInShoppingList}
          />
        );
      })}
    </ListGroup>
  );
}
