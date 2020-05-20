import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* more pages to be added here later */}
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}
