import axios from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { RecipeAttributes, Ingredient } from "../../common/types";
import { Col, Row, Jumbotron } from "react-bootstrap";
import { showIngredient } from "../create-shopping-list/ShoppingList";

interface ShowRecipeProps extends RouteComponentProps {
  recipeId?: number;
}

export default function ShowRecipe(props: ShowRecipeProps) {
  let [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: []
  } as RecipeAttributes);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipe_with_ingredients/${props.recipeId}`)
      .then(response => {
        setRecipe(response.data.data.attributes);
      })
      .catch(err => console.error(err));
  }, [props.recipeId]);

  return (
    <div className="mb-5">
      <Row>
        <Col className="p-0">
          <Jumbotron
            fluid
            className="d-flex align-items-center"
            style={{
              background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${recipe.image_url}) center`,
              height: "35rem"
            }}
          >
            <h1 className="text-center text-white" style={{ fontSize: "7rem" }}>
              {recipe.name}
            </h1>
          </Jumbotron>
        </Col>
      </Row>

      <Col xs={{ offset: 1, span: 10 }}>
        <Row>
          <Col>
            {showLinkAttributeIfExists("View Original Recipe", recipe.source_url)}
            {showTextAttributeIfExists("Servings", recipe.servings)}
            {showTextAttributeIfExists("Prep Time (mins)", recipe.prep_time_mins)}
            {showTextAttributeIfExists("Cook Time (mins)", recipe.cook_time_mins)}
            {showTextAttributeIfExists("Total Time (mins)", recipe.total_time_mins)}

            <hr className="my-5" />
          </Col>
        </Row>

        <Row>
          <Col xs="8" style={{ borderRight: "1px solid rgba(0,0,0,.1)" }}>
            <p className="text-center">
              <b>Instructions</b>
            </p>
            <ol>
              {recipe.instructions.map(instruction => (
                <li>{instruction}</li>
              ))}
            </ol>
          </Col>

          <Col xs="4">
            <p className="text-center">
              <b>Ingredients</b>
            </p>
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li>{showIngredient(ingredient)}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

function showTextAttributeIfExists(
  attributeName: string,
  attribute?: string | number | Ingredient[] | string[]
) {
  return attribute ? (
    <p>
      <b>{attributeName}:</b> {attribute}
    </p>
  ) : (
    ""
  );
}

function showLinkAttributeIfExists(linkText: string, attribute?: string) {
  return attribute ? (
    <a href={attribute}>
      <p className="text-center">{linkText}</p>
    </a>
  ) : (
    ""
  );
}
