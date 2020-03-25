import React from "react";
import { Form } from "react-bootstrap";

interface SearchIngredientInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchIngredientInput(props: SearchIngredientInputProps) {
  return (
    <Form.Control
      type="text"
      size="lg"
      placeholder={props.name}
      onChange={(e: React.FormEvent<HTMLInputElement>) => props.setName(e.currentTarget.value)}
    />
  );
}
