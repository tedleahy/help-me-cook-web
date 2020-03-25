import React from "react";
import { Form } from "react-bootstrap";

interface SearchIngredientInputProps {
  name: string;
}

export default function SearchIngredientInput(props: SearchIngredientInputProps) {
  return <Form.Control type="text" size="lg" placeholder={props.name} />;
}
