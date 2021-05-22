import React from "react";


function Employee(props) {
  return( 


   
         <tr>
         <td><img alt="employee headshot" src={props.picture}/></td>
         <td>{props.name} </td>
         <td>{props.email}</td>
         <td>{props.phone}</td>
         <td>{props.age}</td>
       </tr>
      
  
  ) 
}

export default Employee