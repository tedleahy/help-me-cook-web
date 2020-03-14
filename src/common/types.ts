export interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  instructions: string[];
}

export interface Ingredient {
  name: string;
  amount: number;
  amount_unit: string;
}
