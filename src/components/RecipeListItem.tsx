import React, { useState } from "react";
import { Recipe, Ingredient, TShoppingList } from "../common/types";
import { ListGroup, Button } from "react-bootstrap";

interface RecipeListItemProps {
  recipe: Recipe;
  shoppingList: TShoppingList;
  toggleInShoppingList: (ingredients: Ingredient[], alreadyAdded: boolean) => void;
}

export default function RecipeListItem(props: RecipeListItemProps) {
  const [added, setAdded] = useState(false);
  const recipe = props.recipe;

  return (
    <ListGroup.Item className="d-flex">
      <span className="mr-auto">{props.recipe?.attributes?.name}</span>
      <Button
        className="align-self-end"
        variant={added ? "danger" : "success"}
        onClick={() => {
          props.toggleInShoppingList(recipe?.attributes?.ingredients || [], added);
          setAdded(!added);
        }}
      >
        {added ? "-" : "+"}
      </Button>
    </ListGroup.Item>
  );
}
