import React from "react";
import { ListGroup } from "react-bootstrap";
import { Ingredient, TShoppingList, AppState } from "../../common/types";
import { connect } from "react-redux";

interface ShoppingListProps {
  shoppingList?: Map<number, Ingredient>;
}

function ShoppingList(props: ShoppingListProps) {
  return (
    <ListGroup>
      {props.shoppingList
        ? Array.from(props.shoppingList).map(([id, ingredient]) => {
            return <ListGroup.Item key={id}>{showIngredient(ingredient)}</ListGroup.Item>;
          })
        : []}
    </ListGroup>
  );
}

const shoppingListStore = (appState: AppState) => ({
  shoppingList: appState.shoppingList
});

export default connect(shoppingListStore, null)(ShoppingList);

function showIngredient({ name, amount, amount_unit }: Ingredient): string {
  if (!amount || !amount_unit) return name;

  switch (amount_unit) {
    case "ml":
      if (amount > 1000) {
        return `${amount / 1000} litres of ${name}`;
      } else {
        return `${amount}${amount_unit} of ${name}`;
      }
    case "g":
      return `${amount}${amount_unit} of ${name}`;
    case "tbsp":
    case "tsp":
      return `${amount} ${amount_unit} of ${name}`;
    case "whole":
      return `${amount} ${name}`;
    default:
      return `Error displaying ingredient: ${name}, ${amount}, ${amount_unit}`;
  }
}

export function addIngredientToShoppingList(
  shoppingList: TShoppingList,
  { id, name, amount = 0, amount_unit }: Ingredient
): TShoppingList {
  if (!id) return shoppingList;

  const newShoppingList = new Map(shoppingList);
  const existingIngredient = newShoppingList.get(id);

  if (existingIngredient) {
    const newAmount = (existingIngredient.amount || 0) + amount;
    newShoppingList.set(id, { id, name, amount: newAmount, amount_unit });
  } else {
    newShoppingList.set(id, { id, name, amount, amount_unit });
  }
  return newShoppingList;
}

export function removeIngredientFromShoppingList(
  shoppingList: TShoppingList,
  { id, name, amount = 0, amount_unit }: Ingredient
): TShoppingList {
  if (!id) return shoppingList;

  const newShoppingList = new Map(shoppingList);
  const existingIngredient = newShoppingList.get(id);

  if (existingIngredient) {
    const newAmount = (existingIngredient.amount || 0) - amount;
    if (newAmount <= 0) {
      newShoppingList.delete(id);
    } else {
      newShoppingList.set(id, { id, name, amount: newAmount, amount_unit });
    }
  }
  return newShoppingList;
}
