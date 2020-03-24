import React, { useState } from "react";
import { Recipe } from "../common/types";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addIngredient, removeIngredient } from "../common/actions";

interface RecipeListItemProps {
  recipe: Recipe;
  addIngredient: any;
  removeIngredient: any;
}

function RecipeListItem(props: RecipeListItemProps) {
  const [added, setAdded] = useState(false);
  const recipeAttributes = props.recipe?.attributes;

  function handleOnClick() {
    recipeAttributes?.ingredients.forEach(ingredient => {
      if (added) {
        props.removeIngredient(ingredient);
      } else {
        props.addIngredient(ingredient);
      }
    });
    setAdded(!added);
  }

  return (
    <ListGroup.Item className="d-flex">
      <span className="mr-auto">{recipeAttributes?.name}</span>
      <Button
        className="align-self-end"
        variant={added ? "danger" : "success"}
        onClick={handleOnClick}
      >
        {added ? "-" : "+"}
      </Button>
    </ListGroup.Item>
  );
}

export default connect(null, { addIngredient, removeIngredient })(RecipeListItem);
