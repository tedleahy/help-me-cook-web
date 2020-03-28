import { Ingredient } from "../../common/types";

export interface AddRemoveSearchIngredientAction {
  type: "ADD_SEARCH_INGREDIENT" | "REMOVE_SEARCH_INGREDIENT";
  ingredientName: string;
}

export interface UpdateSearchIngredientAction {
  type: "UPDATE_SEARCH_INGREDIENT";
  oldIngredientName: string;
  newIngredientName: string;
}

export interface ShoppingListAction {
  type: "ADD_TO_SHOPPING_LIST" | "REMOVE_FROM_SHOPPING_LIST";
  ingredient: Ingredient;
}

export type StateAction =
  | ShoppingListAction
  | AddRemoveSearchIngredientAction
  | UpdateSearchIngredientAction;

export {
  ADD_SEARCH_INGREDIENT,
  REMOVE_SEARCH_INGREDIENT,
  UPDATE_SEARCH_INGREDIENT,
  addSearchIngredient,
  removeSearchIngredient,
  updateSearchIngredient
} from "./searchIngredientsActions";

export {
  ADD_TO_SHOPPING_LIST,
  REMOVE_FROM_SHOPPING_LIST,
  addToShoppingList,
  removeFromShoppingList
} from "./shoppingListActions";
