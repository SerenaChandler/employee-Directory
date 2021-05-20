import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import Employee from "./components/Employee"
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    employeeName: "",
    results: [],
  };

  componentDidMount() {
    this.showEmployee();
  }

  showEmployee = () => {
    API.getRandomPerson()
      .then((res) => {
        console.log(res);
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          employeeName={this.state.employeeName}
          handleInputChange={this.handleInputChange}
        />
        <Employee 
        results = {this.state.results}
        />
      </div>
    );
  }
}

export default App;
