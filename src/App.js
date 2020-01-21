  
import React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import Main from './pages';
import Login from './pages/Login';
import ChoosePlan from "./pages/ChoosePlan";
import movies from './components/movies'

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/movies" component={movies} />
      <Route path="/ChoosePlan" component={ChoosePlan} />
      </Switch>
    </div>
  );
}
export default App;


