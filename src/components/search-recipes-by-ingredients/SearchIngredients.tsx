import React from "react";
import { Form } from "react-bootstrap";
import SearchIngredientInput from "./SearchIngredientInput";
import SearchIngredientAddRemoveButton from "./SearchIngredientAddRemoveButton";

export default function SearchIngredients() {
  return (
    <Form className="d-flex">
      <SearchIngredientInput name="Ingredient 1" />
      <SearchIngredientAddRemoveButton />
    </Form>
  );
}
