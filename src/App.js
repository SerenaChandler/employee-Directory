import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import "./App.css";

class App extends Component {
  state = {
    employeeName: "",
  };

  render() {
    return (
      <div className="App">
        <Searchbar></Searchbar>
      </div>
    );
  }
}

export default App;
