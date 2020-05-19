import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
