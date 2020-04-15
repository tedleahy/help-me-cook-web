import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Row, Col, Form, Button } from "react-bootstrap";

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
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                const recipe = {
                  name: name,
                  imageUrl: imageUrl,
                  ingredients: ingredients.split("\n"),
                  instructions: instructions.split("\n")
                };
                console.log(recipe);
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
