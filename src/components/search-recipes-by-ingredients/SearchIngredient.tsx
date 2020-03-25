import React, { useState } from "react";
import SearchIngredientInput from "./SearchIngredientInput";
import SearchIngredientAddRemoveButton from "./SearchIngredientAddRemoveBtn";

export default function SearchIngredient() {
  const [ingredientName, setIngredientName] = useState("");

  return (
    <>
      <SearchIngredientInput name={ingredientName} setName={setIngredientName} />
      <SearchIngredientAddRemoveButton ingredientName={ingredientName} />
    </>
  );
}
