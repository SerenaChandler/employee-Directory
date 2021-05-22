import React from "react";
import Form from 'react-bootstrap/Form'

function Searchbar(props) {
  return( 
    <Form >
 
   
    <Form.Control value={props.employeeName} name="employeeName"  onChange={props.handleInputChange} type="text" placeholder="Enter employee name" />
    
   
  </Form>

  )
}

export default Searchbar