import "./index.css";

import Nav from "./components/Nav";
import Content from "./components/Content";
import { countContext } from "./components/Context/countContext"


function App() {
  return (
    <countContext.Provider className="container mx-auto">
        <Nav />
        <Content />
    </countContext.Provider>
  );
}

export default App;
