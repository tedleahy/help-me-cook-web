import React from "react";
import { AddRemoveSearchIngredientAction } from "../../state/actions";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const buttonStyleClasses = "ml-1 py-0";

interface EditIngredientBtnProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditIngredientBtn(props: EditIngredientBtnProps) {
  return (
    <Button className={buttonStyleClasses} onClick={() => props.setEditing(true)}>
      <FontAwesomeIcon icon={faPencilAlt} />
    </Button>
  );
}

export function RemoveIngredientBtn(props: RemoveIngredientBtnProps) {
  return (
    <Button
      style={{ fontSize: "x-large", width: "2em" }}
      className={buttonStyleClasses}
      variant="danger"
      onClick={props.removeSearchIngredient}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </Button>
  );
}

interface UpdateIngredientBtnProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UpdateIngredientBtn(props: UpdateIngredientBtnProps) {
  return (
    <Button className={buttonStyleClasses} onClick={() => props.setEditing(false)}>
      <FontAwesomeIcon icon={faCheck} />
    </Button>
  );
}

interface RemoveIngredientBtnProps {
  removeSearchIngredient: () => AddRemoveSearchIngredientAction;
}
