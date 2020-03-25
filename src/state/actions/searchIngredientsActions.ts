import { SearchIngredientsAction } from "./index";

export const ADD_TO_SEARCH_INGREDIENTS = "ADD_TO_SEARCH_INGREDIENTS";
export const REMOVE_FROM_SEARCH_INGREDIENTS = "REMOVE_FROM_SEARCH_INGREDIENTS";

export function addToSearchIngredients(ingredientName: string): SearchIngredientsAction {
  return {
    type: ADD_TO_SEARCH_INGREDIENTS,
    ingredientName: ingredientName
  };
}

export function removeFromSearchIngredients(ingredientName: string): SearchIngredientsAction {
  return {
    type: REMOVE_FROM_SEARCH_INGREDIENTS,
    ingredientName: ingredientName
  };
}
