import { AppState, Ingredient, TShoppingList, TSearchIngredients } from "../common/types";
import {
  ADD_TO_SHOPPING_LIST,
  REMOVE_FROM_SHOPPING_LIST,
  ADD_TO_SEARCH_INGREDIENTS,
  REMOVE_FROM_SEARCH_INGREDIENTS,
  StateAction
} from "./actions";
import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList
} from "../components/create-shopping-list/ShoppingList";
import { combineReducers } from "redux";

export const initialState: AppState = {
  shoppingList: new Map<number, Ingredient>(),
  searchIngredients: []
};

export const appState = combineReducers({
  shoppingList,
  searchIngredients
});

function shoppingList(list = new Map<number, Ingredient>(), action: StateAction): TShoppingList {
  const newShoppingList = new Map(list);

  switch (action.type) {
    case ADD_TO_SHOPPING_LIST:
      return addIngredientToShoppingList(newShoppingList, action.ingredient);
    case REMOVE_FROM_SHOPPING_LIST:
      return removeIngredientFromShoppingList(newShoppingList, action.ingredient);

    default:
      return newShoppingList;
  }
}

function searchIngredients(
  ingredients = [] as TSearchIngredients,
  action: StateAction
): TSearchIngredients {
  switch (action.type) {
    case ADD_TO_SEARCH_INGREDIENTS:
      return action.ingredientName === "" ? ingredients : [...ingredients, action.ingredientName];
    case REMOVE_FROM_SEARCH_INGREDIENTS:
      return ingredients.filter(ingredient => ingredient !== action.ingredientName);

    default:
      return ingredients;
  }
}
