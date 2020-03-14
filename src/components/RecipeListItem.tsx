import React, { useState } from "react";
import { Recipe } from "../common/types";
import { ListGroup, Button } from "react-bootstrap";

interface RecipeListItemProps {
  recipe: Recipe;
}

export default function RecipeListItem(props: RecipeListItemProps) {
  const [added, setAdded] = useState(false);

  return (
    <ListGroup.Item className="d-flex">
      <span className="mr-auto">{props.recipe?.["name"]}</span>
      <Button
        className="align-self-end"
        variant={added ? "danger" : "success"}
        onClick={() => setAdded(!added)}
      >
        {added ? "-" : "+"}
      </Button>
    </ListGroup.Item>
  );
}
