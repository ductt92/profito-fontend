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
import Home from "./container/Home"
import RouteWithSubRoutes from './components/Router'


function App() {
  const [theme, toogleTheme] = useDarkMode();
  const routes = [
    {
      path: "/",
      component: Home,
      name:"Home"
    },
    {
      path: "/about",
      component: Home,
      name:"About"
    },
    {
      path: "/CV",
      component: Home,
      name:"CV"
    },

  ];

  return (
    <Router>

      <div className={`App ${theme}`}>

        <Navbar routes={routes} />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>

      <Notifications />
    </Router>

  );
}
export default App