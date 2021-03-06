import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs"
import Menu from "./pages/Menu"
import Pedido from "./pages/Pedido"
import NavBar from "./components/NavBar"


const Router = () => (
  <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/aboutUs" component={AboutUs}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/pedido" component={Pedido}/>
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Router;