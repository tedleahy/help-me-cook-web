import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import SearchIngredients from "./SearchIngredientsList";
import PossibleRecipes from "./PossibleRecipes";

export default function SearchRecipesByIngredients(props: RouteComponentProps) {
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
          <SearchIngredients />
        </Col>
        <Col className="d-flex justify-content-center">
          <PossibleRecipes />
        </Col>
      </Row>
    </Container>
  );
}
