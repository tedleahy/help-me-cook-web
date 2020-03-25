import { Ingredient } from "../../common/types";

export interface SearchIngredientsAction {
  type: "ADD_TO_SEARCH_INGREDIENTS" | "REMOVE_FROM_SEARCH_INGREDIENTS";
  ingredientName: string;
}

export interface ShoppingListAction {
  type: "ADD_TO_SHOPPING_LIST" | "REMOVE_FROM_SHOPPING_LIST";
  ingredient: Ingredient;
}

export type StateAction = ShoppingListAction | SearchIngredientsAction;

export {
  ADD_TO_SEARCH_INGREDIENTS,
  REMOVE_FROM_SEARCH_INGREDIENTS,
  addToSearchIngredients,
  removeFromSearchIngredients
} from "./searchIngredientsActions";

export {
  ADD_TO_SHOPPING_LIST,
  REMOVE_FROM_SHOPPING_LIST,
  addToShoppingList,
  removeFromShoppingList
} from "./shoppingListActions";
