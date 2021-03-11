import React from "react";
import "./App.scss";
import { useDarkMode } from "./ultils/darkMode"
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notifications from 'react-notify-toast';
import Navbar from "./components/Navbar"


function App() {
  const [theme, toogleTheme] = useDarkMode();

  return (
    <Router>

      <div className={`App ${theme}`}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className={"dsadsa"}>
              <p style={{ color: "red" }}>Home</p>
            </div>
          </Route>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/dashboard">
            <div>Dashboard</div>
          </Route>
        </Switch>
      </div>
      <Notifications />
    </Router>

  );
}
export default App