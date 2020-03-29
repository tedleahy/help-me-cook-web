import React, { useState, SetStateAction } from "react";
import { Button, ListGroup } from "react-bootstrap";
import axios, { AxiosResponse, AxiosError } from "axios";
import { connect } from "react-redux";
import { AppState, Recipe } from "../../common/types";

type TSetPossibleRecipes = React.Dispatch<React.SetStateAction<Recipe[]>>;

const searchIngredientsStore = (appState: AppState) => ({
  searchIngredients: appState.searchIngredients
});

export default connect(searchIngredientsStore)(PossibleRecipes);

interface PossibleRecipesProps {
  searchIngredients?: string[];
}

function PossibleRecipes(props: PossibleRecipesProps) {
  const [possibleRecipes, setPossibleRecipes] = useState([] as Recipe[]);

  return possibleRecipes.length ? (
    <PossibleRecipeList recipes={possibleRecipes} />
  ) : (
    <GetPossibleRecipesBtn
      searchIngredients={props.searchIngredients}
      setPossibleRecipes={setPossibleRecipes}
    />
  );
}

function getPossibleRecipes(
  searchIngredients = [] as string[],
  setPossibleRecipes: TSetPossibleRecipes
) {
  axios
    .post("http://localhost:5000/search_recipes_by_ingredients", {
      ingredient_names: searchIngredients
    })
    .then((response: AxiosResponse) => setPossibleRecipes(response?.data?.data))
    .catch((error: AxiosError) => console.error(error));
}

interface GetPossibleRecipesBtnProps {
  searchIngredients?: string[];
  setPossibleRecipes: TSetPossibleRecipes;
}

function GetPossibleRecipesBtn(props: GetPossibleRecipesBtnProps) {
  return (
    <Button
      className="h-100"
      onClick={() => getPossibleRecipes(props.searchIngredients, props.setPossibleRecipes)}
    >
      <b>Get Possible Recipes</b>
    </Button>
  );
}

interface PossibleRecipeListProps {
  recipes: Recipe[];
}

function PossibleRecipeList(props: PossibleRecipeListProps) {
  return (
    <ListGroup style={{ width: "100%", height: "80%" }}>
      {props.recipes.map(recipe => (
        <ListGroup.Item key={recipe.id}>{recipe.attributes.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
