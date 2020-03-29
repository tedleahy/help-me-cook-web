import React from "react";
import { Button } from "react-bootstrap";
import axios, { AxiosResponse, AxiosError } from "axios";
import { connect } from "react-redux";
import { AppState } from "../../common/types";

interface PossibleRecipesProps {
  searchIngredients?: string[];
}

function PossibleRecipes(props: PossibleRecipesProps) {
  return <GetPossibleIngredientsBtn searchIngredients={props.searchIngredients} />;
}

interface GetPossibleIngredientBtnProps {
  searchIngredients?: string[];
}

function GetPossibleIngredientsBtn(props: GetPossibleIngredientBtnProps) {
  return (
    <Button
      style={{ height: "100%" }}
      onClick={() => {
        axios
          .post("http://localhost:5000/search_recipes_by_ingredients", {
            ingredient_names: props.searchIngredients
          })
          .then((response: AxiosResponse) => console.log(response.data.data))
          .catch((error: AxiosError) => console.error(error));
      }}
    >
      <b>Get Possible Recipes</b>
    </Button>
  );
}

const searchIngredientsStore = (appState: AppState) => ({
  searchIngredients: appState.searchIngredients
});

export default connect(searchIngredientsStore)(PossibleRecipes);
