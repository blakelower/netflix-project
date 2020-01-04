import React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import Main from './pages';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
