import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avenger";
import avengersData from "../Data/AvengersData";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/avengers" activeClassName="activeNavButton">
            Avengers
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/avengers"
        render={props => (
          <AvengersList {...props} avengersList={avengersData} />
        )}
      />
      <Route
        path="/avengers/:id"
        render={props => <Avenger {...props} avengersList={avengersData} />}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
