import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import Employee from "./components/Employee";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    employeeName: "",
    results: [],
    filteredResults: [],
    sortToggle: true,
    sorted: {
      name: true,
    },
    search: {
      name: "",
    },
  };

  componentDidMount() {
    this.showEmployee();
  }

  showEmployee = () => {
    API.getRandomPerson()
      .then((res) => {
        console.log(res);
        this.setState({
          results: res.data.results,
          filteredResults: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
    this.filterEmployees(value.toLowerCase().trim());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  SortEmployees = () => {
    this.state.results.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
    console.log(this.state.results);
  };

  filterEmployees = (input) => {
    if (input) {
      this.setState({
        filteredResults: this.state.results.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(input) ||
            employee.cell.includes(input) ||
            employee.email.includes(input) ||
            employee.dob.date.includes(input)
          );
        }),
      });
    } else {
      this.setState({ filteredResults: this.state.employees });
    }
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          employeeName={this.state.employeeName}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Employee
          filteredResults={this.state.filteredResults}
          results={this.state.results}
          SortEmployees={this.SortEmployees}
        />
      </div>
    );
  }
}

export default App;
