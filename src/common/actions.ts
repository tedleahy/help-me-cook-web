import { Ingredient } from "./types";

export type StateAction = ShoppingListAction | SearchIngredientsAction;

/*
 * 'Create a Shopping List'
 */

export const ADD_TO_SHOPPING_LIST = "ADD_TO_SHOPPING_LIST";
export const REMOVE_FROM_SHOPPING_LIST = "REMOVE_FROM_SHOPPING_LIST";

interface ShoppingListAction {
  type: "ADD_TO_SHOPPING_LIST" | "REMOVE_FROM_SHOPPING_LIST";
  ingredient: Ingredient;
}

export function addToShoppingList(ingredient: Ingredient): ShoppingListAction {
  return {
    type: ADD_TO_SHOPPING_LIST,
    ingredient: ingredient
  };
}

export function removeFromShoppingList(ingredient: Ingredient): ShoppingListAction {
  return {
    type: REMOVE_FROM_SHOPPING_LIST,
    ingredient: ingredient
  };
}

/*
 * 'What Meals Can I Make?'
 */

export const ADD_TO_SEARCH_INGREDIENTS = "ADD_TO_SEARCH_INGREDIENTS";
export const REMOVE_FROM_SEARCH_INGREDIENTS = "REMOVE_FROM_SEARCH_INGREDIENTS";

interface SearchIngredientsAction {
  type: "ADD_TO_SEARCH_INGREDIENTS" | "REMOVE_FROM_SEARCH_INGREDIENTS";
  ingredientName: string;
}

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
