import { AppState, Ingredient } from "./types";
import { ShoppingListAction, ADD_INGREDIENT, REMOVE_INGREDIENT } from "./actions";
import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList
} from "../components/create-shopping-list/ShoppingList";

export const initialState: AppState = {
  shoppingList: new Map<number, Ingredient>()
};

export function appState(state = initialState, action: ShoppingListAction): AppState {
  const newShoppingList = new Map(state.shoppingList);

  switch (action.type) {
    case ADD_INGREDIENT:
      addIngredientToShoppingList(newShoppingList, action.ingredient);
      return { shoppingList: newShoppingList };

    case REMOVE_INGREDIENT:
      removeIngredientFromShoppingList(newShoppingList, action.ingredient);
      return { shoppingList: newShoppingList };

    default:
      return state;
  }
}
