import React from 'react'

function Employee() {
    var value = 4;
    var exist = true;
  return (
    <div>
        {
            exist ? <h1>Here is an employee and {value}</h1> : <h1>not exists</h1>
        }
    </div> 
  )
}

export default Employee;