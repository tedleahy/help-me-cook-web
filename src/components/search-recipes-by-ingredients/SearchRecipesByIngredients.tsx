import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Container, Row, Col, Form } from "react-bootstrap";
import PossibleRecipes from "./PossibleRecipes";
import NewIngredient from "./NewIngredient";
import AddedIngredient from "./AddedIngredient";

export default function SearchRecipesByIngredients(props: RouteComponentProps) {
  const [searchIngredients, setSearchIngredients] = useState([] as string[]);

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>What Meals Can I Make?</h1>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p className="text-muted">
            Enter the ingredients you want to cook with, and see all the possible meals you can make
            with them!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            {searchIngredients.map(ingredientName => {
              return <AddedIngredient ingredientName={ingredientName} />;
            })}
            <NewIngredient />
          </Form>
        </Col>
        <Col className="d-flex justify-content-center">
          <PossibleRecipes />
        </Col>
      </Row>
    </Container>
  );
}
