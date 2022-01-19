import React from "react";
import "./index.css";

import Nav from "./components/Nav";
import Content from "./components/Content";
import { countContext } from "./components/Context/countContext"


function App() {

  const [count, setCount] = React.useState(0)

  const counter = {
    count,
    setCount
  }

  return (
    <countContext.Provider value={ counter }>
        <Nav />
        <Content />
    </countContext.Provider>
  );
}

export default App;
