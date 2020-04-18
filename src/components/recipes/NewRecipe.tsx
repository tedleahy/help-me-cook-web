import axios from "axios";
import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Ingredient, AmountUnit } from "../../common/types";

export default function NewRecipe(props: RouteComponentProps) {
  const [name, setName] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [servings, setServings] = useState(0);
  const [prepTimeMins, setPrepTimeMins] = useState(0);
  const [cookTimeMins, setCookTimeMins] = useState(0);
  const [totalTimeMins, setTotalTimeMins] = useState(0);
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
            {buildInput("small", "text", "Name", name, setName)}
            {buildInput("small", "text", "Source URL", sourceUrl, setSourceUrl)}
            {buildInput("small", "text", "Image URL", imageUrl, setImageUrl)}
            {buildInput("small", "number", "Servings", servings, setServings)}
            {buildInput("small", "number", "Prep time (mins)", prepTimeMins, setPrepTimeMins)}
            {buildInput("small", "number", "Cook time (mins)", cookTimeMins, setCookTimeMins)}
            {buildInput("small", "number", "Total time (mins)", totalTimeMins, setTotalTimeMins)}
            {buildInput("big", "text", "Ingredients", ingredients, setIngredients)}
            {buildInput("big", "text", "Instructions", instructions, setInstructions)}

            <Button
              variant="success"
              size="lg"
              block
              onClick={() => {
                const recipe = {
                  name,
                  image_url: imageUrl,
                  servings,
                  prepTimeMins,
                  cookTimeMins,
                  totalTimeMins,
                  ingredients: ingredients.split("\n").map(parseIngredient),
                  instructions: instructions.split("\n")
                };
                console.log(recipe);
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

function buildInput(size: InputSize, type: string, name: string, stateVar: any, setState: any) {
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type={type}
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
