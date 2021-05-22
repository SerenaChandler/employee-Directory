import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import Employee from "./components/Employee";
import EmployeeHeader from "./components/tableHeader";
import API from "./utils/API";
import Table from 'react-bootstrap/Table'

function App() {
  const [employeeName, setEmployeeName] = useState("");
  const [ogResults, setOgResults] = useState([]);
  const [results, setResults] = useState([])

  useEffect(() => {
    API.getRandomPerson()
      .then((res) => {
        console.log(res);
        setOgResults(res.data.results);
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    const filteredEmployees = ogResults.filter((employee) => {
      return employee.name.first
        .toLowerCase()
        .concat(" ", employee.name.last.toLowerCase())
        .includes(value);
    });
    console.log(value);
    setResults(filteredEmployees);
    setEmployeeName(value);
  };

  const sortEmployees = () => {
    const newResults = [...results];
    const sortedEmployees = newResults.sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    setResults(sortedEmployees);
  };

  return (
    <div className="App">
      <Searchbar
        handleInputChange={handleInputChange}
        employeeName={employeeName}
      />
      <Table striped bordered hover>
      <EmployeeHeader sortEmployees={sortEmployees} />
      
      <tbody>
      {results.map((user) => (
        <Employee
          picture={user.picture.large}
          name={user.name.first + " " + user.name.last}
          age={user.dob.age}
          email={user.email}
          phone={user.phone}
        />
      ))}
  </tbody>

</Table>
    </div>
  );
}

export default App;
