import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Stock from "./components/Stock";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
  <Router>
    
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/stocks/:symbol" component={Stock} />
      <Route exact path="/dashboard" component={Dashboard} />
    
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

