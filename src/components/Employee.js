import React from "react";
import Table from 'react-bootstrap/Table'

function Employee(props) {
  return( 
<Table striped bordered hover>
  <thead>
    <tr>
    
      <th>Image</th>
      <th> Name</th>
      <th> Email</th>
      <th> Phone</th>
      <th> DOB</th>
      
    </tr>
  </thead>
  <tbody>

     {props.results.map(result => (
         <tr>
         <td><img alt="employee headshot" src={result.picture.thumbnail}/></td>
         <td>{result.name.first} {result.name.last} </td>
         <td>{result.email}</td>
         <td>{result.cell}</td>
         <td>{result.dob.date}</td>
       </tr>
      ))}
  

  </tbody>
</Table>

  )
}

export default Employee