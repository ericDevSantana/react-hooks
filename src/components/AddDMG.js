import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function AddDMG() {
  const { value, setValue } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        setValue((prevValue) => {
          return prevValue + 10;
        });
      }}
    >
      ADD DMG
    </button>
  );
}
