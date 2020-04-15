import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Container, Row, Col, Form } from "react-bootstrap";
import PossibleRecipes from "./PossibleRecipes";
import NewIngredient from "./NewIngredient";
import AddedIngredient from "./AddedIngredient";
import { AppState } from "../../common/types";
import { connect } from "react-redux";
import { addSearchIngredient, AddRemoveSearchIngredientAction } from "../../state/actions";

interface SearchRecipesByIngredientsProps extends RouteComponentProps {
  searchIngredients?: string[];
  addSearchIngredient: (ingredientName: string) => AddRemoveSearchIngredientAction;
}

function SearchRecipesByIngredients(props: SearchRecipesByIngredientsProps) {
  return (
    <Container>
      <Row>
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
            {props.searchIngredients
              ? props.searchIngredients.map((ingredientName, index) => (
                  <AddedIngredient key={index} ingredientName={ingredientName} />
                ))
              : []}
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

const searchIngredientsStore = (appState: AppState) => ({
  searchIngredients: appState.searchIngredients
});

export default connect(searchIngredientsStore, { addSearchIngredient })(SearchRecipesByIngredients);
