import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Display = (props) => {
  const { value, setValue } = useContext(UserContext);

  return <div>Display Component: {value}</div>;
};

export default Display;
