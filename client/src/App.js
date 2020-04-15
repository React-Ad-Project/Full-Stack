import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/navbar";
class App extends Component {
 

  componentDidMount() {}

  render() {
    return (
      <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
