import React, { useState } from "react";
import {
  AddRemoveSearchIngredientAction,
  removeSearchIngredient,
  UpdateSearchIngredientAction,
  updateSearchIngredient
} from "../../state/actions";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import {
  UpdateIngredientBtn,
  EditIngredientBtn,
  RemoveIngredientBtn
} from "./AddedIngredientButtons";

interface AddedIngredientProps {
  removeSearchIngredient: (ingredientName: string) => AddRemoveSearchIngredientAction;
  updateSearchIngredient: (
    oldIngredientName: string,
    newIngredientName: string
  ) => UpdateSearchIngredientAction;
  ingredientName: string;
}

function AddedIngredient(props: AddedIngredientProps) {
  const originalName = props.ingredientName;
  const [editing, setEditing] = useState(false);

  return (
    <Form.Group className="d-flex">
      <Form.Control
        disabled={!editing}
        type="text"
        size="lg"
        value={props.ingredientName}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          props.updateSearchIngredient(originalName, e.currentTarget.value)
        }
      />
      {editing ? (
        <UpdateIngredientBtn setEditing={setEditing} />
      ) : (
        <>
          <EditIngredientBtn setEditing={setEditing} />
          <RemoveIngredientBtn
            removeSearchIngredient={() => props.removeSearchIngredient(props.ingredientName)}
          />
        </>
      )}
    </Form.Group>
  );
}

export default connect(null, { removeSearchIngredient, updateSearchIngredient })(AddedIngredient);
