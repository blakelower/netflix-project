import React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import Main from './pages';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}
export default App;


