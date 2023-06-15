import { useState } from "react";
import "./App.css";
import AboutIntroduction from "./components/aboutIntroduction";
import AboutTechnologies from "./components/AboutTechnologies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <AboutIntroduction />
      <AboutTechnologies />
    </div>
  );
}

export default App;
