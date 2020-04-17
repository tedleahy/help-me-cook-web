import axios from "axios";
import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Ingredient, AmountUnit } from "../../common/types";

export default function NewRecipe(props: RouteComponentProps) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <Col xs={{ offset: 1, span: 10 }}>
      <Row>
        <Col>
          <h1>New Recipe</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            {textInput("small", "Name", name, setName)}
            {textInput("small", "Image URL", imageUrl, setImageUrl)}
            {textInput("big", "Ingredients", ingredients, setIngredients)}
            {textInput("big", "Instructions", instructions, setInstructions)}

            <Button
              variant="success"
              size="lg"
              block
              onClick={() => {
                const recipe = {
                  name: name,
                  image_url: imageUrl,
                  ingredients: ingredients.split("\n").map(parseIngredient),
                  instructions: instructions.split("\n")
                };
                axios
                  .post("http://localhost:5000/recipes/create", recipe)
                  .then(response => console.log(response))
                  .catch(err => console.error(err));
              }}
            >
              Add Recipe
            </Button>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}

type InputSize = "big" | "small";

function textInput(size: InputSize, name: string, stateVar: string, setState: any) {
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="text"
        as={size === "big" ? "textarea" : "input"}
        rows="7"
        placeholder={name}
        value={stateVar}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.currentTarget.value)}
      />
    </Form.Group>
  );
}

function parseIngredient(ingredientLine: string): Ingredient {
  let [, amount, amountUnit, name] = ingredientLine.match(/^(\d*)\s*(ml|g|tsp|tbsp)?\s*(.*)$/);
  if (amount && !amountUnit) amountUnit = "whole";

  return {
    name: name,
    amount: parseFloat(amount) || undefined,
    amount_unit: (amountUnit as unknown) as AmountUnit
  };
}
