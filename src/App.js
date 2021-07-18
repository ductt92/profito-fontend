import React from "react";
import "./App.scss";
import { useDarkMode } from "./utils/darkMode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notifications from "react-notify-toast";
import Navbar from "./components/Navbar";
import HomeContainer from "./pages/Home";
import RouteWithSubRoutes from "./components/Router/router";
import PrivateRoute from "./components/Router/private";
import AdminContainer from "./pages/Admin";
import AboutContainer from "./pages/About";
import LoginContainer from "./pages/Login";
import { StoreContext } from "./utils/store";

function App() {
  const [theme, toogleTheme] = useDarkMode();
  const { controlNavBar } = React.useContext(StoreContext);
  const [isShowNavBar, setShowNavBar] = controlNavBar;
  const routes = [
    {
      path: "/",
      component: HomeContainer,
      name: "Home",
      exact: true,
      isPrivate: false,
    },
    {
      path: "/about",
      component: AboutContainer,
      name: "About",
      isPrivate: false,
    },
    {
      path: "/cv",
      component: AdminContainer,
      name: "CV",
      isPrivate: false,
    },

    {
      path: "/login-admin",
      component: LoginContainer,
      name: "CV",
      isPrivate: true,
    },
  ];
  return (
    <Router>
      <div className={`App ${theme}`}>
        {isShowNavBar && <Navbar routes={routes} />}
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          <PrivateRoute>
            <Route path="/manager">
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
export default App;
