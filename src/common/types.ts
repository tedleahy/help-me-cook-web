export interface Recipe {
  id: number;
  attributes: RecipeAttributes;
}

export interface RecipeAttributes {
  name: string;
  image_url?: string;
  servings?: number;
  source_url?: string;
  prep_time_mins?: number;
  cook_time_mins?: number;
  total_time_mins?: number;
  ingredients: Ingredient[];
  instructions: string[];
}

export interface Ingredient {
  id?: number;
  name: string;
  amount?: number;
  amount_unit?: AmountUnit;
}

export type AmountUnit = "ml" | "g" | "tsp" | "tbsp" | "whole";

export type TShoppingList = Map<number, Ingredient>;

export type TSearchIngredients = string[];

export interface AppState {
  shoppingList: TShoppingList;
  searchIngredients: string[];
}
