export interface Recipe {
  id: number;
  attributes: {
    name: string;
    imageUrl: string;
    ingredients: Ingredient[];
    instructions: string[];
  };
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  amount_unit: "ml" | "g" | "tsp" | "tbsp" | "whole";
}

export type TShoppingList = Map<number, Ingredient>;

export type TSearchIngredients = string[];

export interface AppState {
  shoppingList: TShoppingList;
  searchIngredients: string[];
}
