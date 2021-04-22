import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
