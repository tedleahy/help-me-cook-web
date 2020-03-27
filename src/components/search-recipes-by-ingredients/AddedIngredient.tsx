import React from "react";
import { SearchIngredientsAction, removeFromSearchIngredients } from "../../state/actions";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

interface AddedIngredientProps {
  removeFromSearchIngredients: (ingredientName: string) => SearchIngredientsAction;
  ingredientName: string;
}

function AddedIngredient(props: AddedIngredientProps) {
  return (
    <Form.Group className="d-flex">
      <Form.Control disabled type="text" size="lg" value={props.ingredientName} />
      <EditIngredientBtn />
      <RemoveIngredientBtn
        removeFromSearchIngredients={props.removeFromSearchIngredients}
        ingredientName={props.ingredientName}
      />
    </Form.Group>
  );
}

const buttonStyleClasses = "ml-1 py-0";

function EditIngredientBtn() {
  return <Button className={buttonStyleClasses}>Edit</Button>;
}

interface RemoveIngredientBtnProps {
  removeFromSearchIngredients: (ingredientName: string) => SearchIngredientsAction;
  ingredientName: string;
}

function RemoveIngredientBtn(props: RemoveIngredientBtnProps) {
  return (
    <Button
      style={{ fontSize: "x-large", width: "2em" }}
      className={buttonStyleClasses}
      variant="danger"
    >
      -
    </Button>
  );
}

export default connect(null, { removeFromSearchIngredients })(AddedIngredient);
