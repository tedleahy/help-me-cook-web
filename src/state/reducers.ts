import { AppState, Ingredient, TShoppingList, TSearchIngredients } from "../common/types";
import {
  ADD_TO_SHOPPING_LIST,
  REMOVE_FROM_SHOPPING_LIST,
  ADD_SEARCH_INGREDIENT,
  REMOVE_SEARCH_INGREDIENT,
  StateAction
} from "./actions";
import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList
} from "../components/create-shopping-list/ShoppingList";
import { combineReducers } from "redux";
import { UPDATE_SEARCH_INGREDIENT } from "./actions/searchIngredientsActions";

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
  const newIngredients = ingredients.slice();

  switch (action.type) {
    case ADD_SEARCH_INGREDIENT:
      return action.ingredientName === "" ? ingredients : [...ingredients, action.ingredientName];
    case REMOVE_SEARCH_INGREDIENT:
      return newIngredients.filter(ingredient => ingredient !== action.ingredientName);
    case UPDATE_SEARCH_INGREDIENT:
      const targetIndex = newIngredients.indexOf(action.oldIngredientName);
      if (~targetIndex) newIngredients[targetIndex] = action.newIngredientName;
      return newIngredients;

    default:
      return newIngredients;
  }
}
