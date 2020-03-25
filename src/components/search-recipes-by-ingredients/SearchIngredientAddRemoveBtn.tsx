import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { addToSearchIngredients, removeFromSearchIngredients } from "../../common/actions";
import { connect } from "react-redux";

interface SearchIngredientAddRemoveBtnProps {
  ingredientName: string;
  addToSearchIngredients: any;
  removeFromSearchIngredients: any;
}

function SearchIngredientAddRemoveBtn(props: SearchIngredientAddRemoveBtnProps) {
  const [added, setAdded] = useState(false);

  return (
    <Button
      style={{ fontSize: "x-large", width: "2em" }}
      className="ml-1 py-0"
      variant={added ? "danger" : "success"}
      onClick={() => {
        if (added) props.removeFromSearchIngredients(props.ingredientName);
        else props.addToSearchIngredients(props.ingredientName);

        setAdded(!added);
      }}
    >
      {added ? "-" : "+"}
    </Button>
  );
}

export default connect(null, { addToSearchIngredients, removeFromSearchIngredients })(
  SearchIngredientAddRemoveBtn
);
