
import React from "react";



function EmployeeHeader(props) {
  return (
    
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={props.sortEmployees}> Name</th>
          <th> Email</th>
          <th> Phone</th>
          <th> Age</th>
        </tr>
      </thead>
 
  );
}

export default EmployeeHeader;

