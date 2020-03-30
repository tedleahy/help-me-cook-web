import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import axios, { AxiosResponse, AxiosError } from "axios";
import { connect } from "react-redux";
import { AppState, Recipe } from "../../common/types";

const searchIngredientsStore = (appState: AppState) => ({
  searchIngredients: appState.searchIngredients
});

export default connect(searchIngredientsStore)(PossibleRecipes);

interface PossibleRecipesProps {
  searchIngredients?: string[];
}

function PossibleRecipes(props: PossibleRecipesProps) {
  const [possibleRecipes, setPossibleRecipes] = useState([] as Recipe[]);

  const getPossibleRecipes = () => {
    axios
      .post("http://localhost:5000/search_recipes_by_ingredients", {
        ingredient_names: props.searchIngredients
      })
      .then((response: AxiosResponse) => setPossibleRecipes(response?.data?.data))
      .catch((error: AxiosError) => console.error(error));
  };

  return (
    <div className="flex-direction-column w-100 text-center">
      <GetPossibleRecipesBtn
        getPossibleRecipes={getPossibleRecipes}
        possibleRecipesLength={possibleRecipes.length}
      />
      <ListGroup style={{ width: "100%", height: "80%" }}>
        {possibleRecipes.map(recipe => (
          <ListGroup.Item key={recipe.id}>{recipe.attributes.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

interface GetPossibleRecipesBtnProps {
  getPossibleRecipes: () => void;
  possibleRecipesLength: number;
}

function GetPossibleRecipesBtn(props: GetPossibleRecipesBtnProps) {
  const getRecipesBtnClasses = "h-100";
  const refreshRecipesBtnClasses = "w-100 mb-2";

  return (
    <Button
      className={props.possibleRecipesLength ? refreshRecipesBtnClasses : getRecipesBtnClasses}
      onClick={() => props.getPossibleRecipes()}
    >
      <b>{props.possibleRecipesLength ? "Refresh" : "Get"} Possible Recipes</b>
    </Button>
  );
}
