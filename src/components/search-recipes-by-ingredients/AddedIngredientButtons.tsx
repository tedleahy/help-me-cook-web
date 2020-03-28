import React from "react";
import { AddRemoveSearchIngredientAction } from "../../state/actions";
import { Button } from "react-bootstrap";

const buttonStyleClasses = "ml-1 py-0";

interface UpdateIngredientBtnProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UpdateIngredientBtn(props: UpdateIngredientBtnProps) {
  return (
    <Button className={buttonStyleClasses} onClick={() => props.setEditing(false)}>
      Update
    </Button>
  );
}

interface EditIngredientBtnProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditIngredientBtn(props: EditIngredientBtnProps) {
  return (
    <Button className={buttonStyleClasses} onClick={() => props.setEditing(true)}>
      Edit
    </Button>
  );
}

interface RemoveIngredientBtnProps {
  removeSearchIngredient: () => AddRemoveSearchIngredientAction;
}

export function RemoveIngredientBtn(props: RemoveIngredientBtnProps) {
  return (
    <Button
      style={{ fontSize: "x-large", width: "2em" }}
      className={buttonStyleClasses}
      variant="danger"
      onClick={props.removeSearchIngredient}
    >
      -
    </Button>
  );
}
