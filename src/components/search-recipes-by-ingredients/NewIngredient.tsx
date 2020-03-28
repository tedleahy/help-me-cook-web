import React, { useState } from "react";
import { AddRemoveSearchIngredientAction, addSearchIngredient } from "../../state/actions";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface NewIngredientProps {
  addSearchIngredient: (ingredientName: string) => AddRemoveSearchIngredientAction;
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
        addSearchIngredient={props.addSearchIngredient}
      />
    </Form.Group>
  );
}

interface AddIngredientBtnProps {
  ingredientName: string;
  setIngredientName: React.Dispatch<React.SetStateAction<string>>;
  addSearchIngredient: (ingredientName: string) => AddRemoveSearchIngredientAction;
}

function AddIngredientBtn(props: AddIngredientBtnProps) {
  return (
    <Button
      style={{ fontSize: "x-large", width: "2em" }}
      className="ml-1 py-0"
      variant="success"
      onClick={() => {
        props.addSearchIngredient(props.ingredientName);
        props.setIngredientName("");
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  );
}

export default connect(null, { addSearchIngredient })(NewIngredient);
