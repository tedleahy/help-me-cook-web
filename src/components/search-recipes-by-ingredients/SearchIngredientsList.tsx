import React from "react";
import { Form } from "react-bootstrap";
import SearchIngredient from "./SearchIngredient";

export default function SearchIngredients() {
  return (
    <Form className="d-flex">
      <SearchIngredient />
    </Form>
  );
}
