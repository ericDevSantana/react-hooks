import React, { useContext } from "react";
import { AddDMG } from "./AddDMG";
import { UserContext } from "../context/UserContext";

const Keyboard = (props) => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <div>Keyboard Component: {value}</div>
      <AddDMG />
    </div>
  );
};

export default Keyboard;
