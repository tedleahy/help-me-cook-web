import React, { useState, MouseEvent, FormEvent, Dispatch, SetStateAction } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { RouteComponentProps } from "@reach/router";
import { Form } from "react-bootstrap";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Ingredient, AmountUnit } from "../../common/types";

export default function NewRecipe(props: RouteComponentProps) {
  const [name, setName] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <>
      <Row className="mt-4">
        <Col>
          <h1>New Recipe</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Form>
            {textInput("Name", setName)}
            {textInput("Source URL", setSourceUrl)}
            {textarea("Ingredients", 7, setIngredients)}
            {textarea("Instructions", 7, setInstructions)}

            <Button
              variant="success"
              type="submit"
              size="lg"
              block
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                const recipe = {
                  name: name,
                  sourceUrl: sourceUrl,
                  ingredients: ingredients
                    .split("\n")
                    .filter(x => x !== "")
                    .map(parseIngredient),
                  instructions: instructions.split("\n")
                };
                sendRecipeToApi(recipe);
                console.log(recipe.ingredients);
              }}
            >
              Add Recipe
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

function parseIngredient(ingredientLine: string): Ingredient {
  let [, amount, amount_unit, name] = ingredientLine.match(
    /(\d+)\s*(ml|g|tsp|tbsp)?\s*(.*)$/
  ) as string[];

  if (amount && !amount_unit) amount_unit = "whole";

  return {
    name: name.toLowerCase(),
    amount: parseFloat(amount),
    amount_unit: (amount_unit as unknown) as AmountUnit
  };
}

function textInput(name: string, setState: Dispatch<SetStateAction<string>>) {
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="text"
        placeholder={name}
        onChange={(e: FormEvent<HTMLInputElement>) => setState(e.currentTarget.value)}
      />
    </Form.Group>
  );
}

function textarea(name: string, rows: number, setState: Dispatch<SetStateAction<string>>) {
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        as="textarea"
        rows={rows.toString()}
        onChange={(e: FormEvent<HTMLInputElement>) => setState(e.currentTarget.value)}
      ></Form.Control>
    </Form.Group>
  );
}

interface FormRecipe {
  name: string;
  sourceUrl?: string;
  ingredients: Ingredient[];
  instructions: string[];
}

function sendRecipeToApi(recipe: FormRecipe) {
  axios
    .post("http://localhost:5000/recipes/create", recipe)
    .then((response: AxiosResponse) => console.log(response))
    .catch((error: AxiosError) => console.error(error));
}
