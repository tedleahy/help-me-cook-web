import React, { useState } from "react";
import { SearchIngredientsAction, addToSearchIngredients } from "../../state/actions";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

interface NewIngredientProps {
  addToSearchIngredients: (ingredientName: string) => SearchIngredientsAction;
}

function NewIngredient(props: NewIngredientProps) {
  const [ingredientName, setIngredientName] = useState("");

  return (
    <Form.Group className="d-flex">
      <Form.Control
        type="text"
        size="lg"
        placeholder="New ingredient"
        value={ingredientName}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setIngredientName(e.currentTarget.value)
        }
      />
      <AddIngredientBtn
        ingredientName={ingredientName}
        setIngredientName={setIngredientName}
        addToSearchIngredients={props.addToSearchIngredients}
      />
    </Form.Group>
  );
}

interface AddIngredientBtnProps {
  ingredientName: string;
  setIngredientName: React.Dispatch<React.SetStateAction<string>>;
  addToSearchIngredients: (ingredientName: string) => SearchIngredientsAction;
}

function AddIngredientBtn(props: AddIngredientBtnProps) {
  return (
    <Button
      style={{ fontSize: "x-large", width: "2em" }}
      className="ml-1 py-0"
      variant="success"
      onClick={() => {
        props.addToSearchIngredients(props.ingredientName);
        props.setIngredientName("");
      }}
    >
      +
    </Button>
  );
}

export default connect(null, { addToSearchIngredients })(NewIngredient);
