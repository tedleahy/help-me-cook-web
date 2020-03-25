import { Ingredient } from "../../common/types";
import { ShoppingListAction } from "./index";

export const ADD_TO_SHOPPING_LIST = "ADD_TO_SHOPPING_LIST";
export const REMOVE_FROM_SHOPPING_LIST = "REMOVE_FROM_SHOPPING_LIST";

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
