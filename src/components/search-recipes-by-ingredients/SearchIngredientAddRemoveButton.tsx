import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function SearchIngredientAddRemoveBtn() {
  const [added, setAdded] = useState(false);

  return (
    <Button
      style={{ fontSize: "x-large", width: "2em" }}
      className="ml-1 py-0"
      variant={added ? "danger" : "success"}
      onClick={() => setAdded(!added)}
    >
      {added ? "-" : "+"}
    </Button>
  );
}
