import React from "react";
import "./App.scss";
import { useDarkMode } from "./ultils/darkMode"
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Notifications from 'react-notify-toast';
import Navbar from "./components/Navbar"
import HomeContainer from "./container/Home"
import RouteWithSubRoutes from './components/Router/router'
import PrivateRoute from './components/Router/private'
import AdminContainer from './container/Admin'
import AboutContainer from './container/About'
import LoginContainer from './container/Login'


function App() {
  const [theme, toogleTheme] = useDarkMode();
  const routes = [
    {
      path: "/",
      component: HomeContainer,
      name: "Home",
      exact: true

    },
    {
      path: "/about",
      component: AboutContainer,
      name: "About"
    },
    {
      path: "/cv",
      component: AdminContainer,
      name: "CV"
    },

    {
      path: "/loginadmin",
      component: LoginContainer,
      name: "CV"
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

          <PrivateRoute>
            <Route path="/manager" >
              <AdminContainer />
            </Route>
          </PrivateRoute>

          <Route path="*">
            <div>404 not found</div>
          </Route>

        </Switch>

      </div>

      <Notifications />
    </Router>

  );
}
export default App