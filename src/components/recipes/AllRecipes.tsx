import axios from "axios";
import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { Recipe } from "../../common/types";

export default function AllRecipes(props: RouteComponentProps) {
  const [recipes, setRecipes] = useState([] as Recipe[]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes_with_ingredients")
      .then(response => setRecipes(response.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Row>
      <Col xs={{ offset: 1, span: 10 }}>
        <Row>
          <Col>
            <h1>All Recipes</h1>
          </Col>
          <Col className="text-right">
            <Link to="/recipes/new">
              <Button variant="success" size="lg">
                + Add New Recipe
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {recipes.map(recipe => (
                <Link key={recipe.id} to={"" + recipe.id}>
                  <ListGroup.Item>{recipe.attributes.name}</ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
