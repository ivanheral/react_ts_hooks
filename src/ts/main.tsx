import React from "react";
import { render } from "react-dom";
import Counter from "./components/counter/counter";
import Sum from "./components/sum/sum";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./components/provider/provider";

const node = document.getElementById("app") as Element;

render(
  <Main>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
          <li>
            <Link to="/sum">Sum</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Counter} />
      <Route path="/sum" component={Sum} />
    </Router>
  </Main>,
  node
);
