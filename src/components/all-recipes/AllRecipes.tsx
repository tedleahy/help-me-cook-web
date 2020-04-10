import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { Row, CardGroup, Card, Col } from "react-bootstrap";
import { Recipe } from "../../common/types";
import axios, { AxiosResponse, AxiosError } from "axios";

export default function AllRecipes(props: RouteComponentProps) {
  const [recipes, setRecipes] = useState([] as Recipe[]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes_with_ingredients")
      .then((response: AxiosResponse) => {
        const recipes = response.data.data;
        setRecipes(recipes);
      })
      .catch((error: AxiosError) => console.error(error));
  }, []);

  return (
    <>
      <Row className="my-4">
        <h1>All Recipes</h1>
      </Row>
      <Row>
        {recipes.length ? (
          <CardGroup>
            {recipes.map(recipe => (
              <Col key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>
                  <Card>
                    <Card.Img
                      src={
                        recipe.attributes.imageUrl
                          ? recipe.attributes.imageUrl
                          : "https://image.flaticon.com/icons/svg/857/857681.svg"
                      }
                      style={{ width: "200px", height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title>{recipe.attributes.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </CardGroup>
        ) : (
          <p>Loading recipes...</p>
        )}
      </Row>
    </>
  );
}
