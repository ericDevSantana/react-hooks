import React, { useContext, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import { UserContext } from "./context/UserContext";

function App() {
  const [value, setValue] = useState(100);

  return (
    <UserContext.Provider value={{ value, setValue }}>
      <div className="App">
        <Display />
        <Keyboard />
      </div>
    </UserContext.Provider>
  );
}

export default App;
