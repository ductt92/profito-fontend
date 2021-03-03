import React from "react";
import "./App.scss";
import { useDarkMode } from "./ultils/darkMode"
import Navbar from "./components/Navbar"


function App() {
  const [theme, toogleTheme] = useDarkMode();

  return (
    <div className={`App ${theme}`} >
      <Navbar />
      <button onClick={toogleTheme}>{theme}</button>

    </div>
  );
}
export default App