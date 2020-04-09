import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import navbar from "./Components/navbar";

class App extends Component {
 

  componentDidMount() {}

  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route path="/" component={navbar} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
