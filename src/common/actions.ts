import { Ingredient } from "./types";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

export interface ShoppingListAction {
  type: "ADD_INGREDIENT" | "REMOVE_INGREDIENT";
  ingredient: Ingredient;
}

export function addIngredient(ingredient: Ingredient): ShoppingListAction {
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient
  };
}

export function removeIngredient(ingredient: Ingredient): ShoppingListAction {
  return {
    type: REMOVE_INGREDIENT,
    ingredient: ingredient
  };
}
