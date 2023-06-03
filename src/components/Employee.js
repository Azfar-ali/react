import React from 'react'

function Employee(props) { 
  var exist = true;
  return (
  <> {
    exist ? <div className={props.className}><h1>Here is an employee {props.name} and his salary is {props.paid}</h1> <p>{props.role? <i>{props.role}</i> : "No role"}</p></div>:           <h1>not exists</h1>
    }</>
    );
  }
  
  export default Employee;