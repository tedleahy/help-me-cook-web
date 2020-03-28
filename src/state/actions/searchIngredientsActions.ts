import { AddRemoveSearchIngredientAction, UpdateSearchIngredientAction } from "./index";

export const ADD_SEARCH_INGREDIENT = "ADD_SEARCH_INGREDIENT";
export const REMOVE_SEARCH_INGREDIENT = "REMOVE_SEARCH_INGREDIENT";
export const UPDATE_SEARCH_INGREDIENT = "UPDATE_SEARCH_INGREDIENT";

export function addSearchIngredient(ingredientName: string): AddRemoveSearchIngredientAction {
  return {
    type: ADD_SEARCH_INGREDIENT,
    ingredientName: ingredientName
  };
}

export function removeSearchIngredient(ingredientName: string): AddRemoveSearchIngredientAction {
  console.log(ingredientName);
  return {
    type: REMOVE_SEARCH_INGREDIENT,
    ingredientName: ingredientName
  };
}

export function updateSearchIngredient(
  oldIngredientName: string,
  newIngredientName: string
): UpdateSearchIngredientAction {
  return {
    type: UPDATE_SEARCH_INGREDIENT,
    oldIngredientName: oldIngredientName,
    newIngredientName: newIngredientName
  };
}
