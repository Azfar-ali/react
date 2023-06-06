import "./index.css";
import Card from "./components/card";
import React from "react";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  // let [role, setRole] = useState("developer");
  let [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Erin",
      role: "Police officer",
      image:
        "https://images.pexels.com/photos/14118017/pexels-photo-14118017.jpeg",
    },
    {
      id: 2,
      name: "Tom",
      role: "abay salay",
      image:
        "https://images.pexels.com/photos/6974936/pexels-photo-6974936.jpeg",
    },
    {
      id: 3,
      name: "Alexa",
      role: "Researcher",
      image:
        "https://images.pexels.com/photos/2868257/pexels-photo-2868257.jpeg",
    },
    {
      id: 4,
      name: "katherine",
      role: "ML Engineer",
      image:
        "https://images.pexels.com/photos/3319333/pexels-photo-3319333.jpeg",
    },
    {
      id: 5,
      name: "Steven",
      role: "Software Developer",
      image:
        "https://images.pexels.com/photos/15940872/pexels-photo-15940872/free-photo-of-kitten-standing-atop-wall-under-blue-sky.jpeg",
    },
    {
      id: 6,
      name: "Juliat",
      role: "App Developer",
      image:
        "https://images.pexels.com/photos/16769489/pexels-photo-16769489/free-photo-of-woman-relaxation-water-summer.jpeg",
    },
    {
      id: 7,
      name: "Naina",
      role: "Web Developer",
      image:
        "https://images.pexels.com/photos/2912166/pexels-photo-2912166.jpeg",
    },
    {
      id: 8,
      name: "Harry",
      role: "App Developer",
      image:
        "https://images.pexels.com/photos/1054048/pexels-photo-1054048.jpeg",
    },
    {
      id: 9,
      name: "Tom",
      role: "Manager",
      image:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
    },
    {
      id: 10,
      name: "Graduate",
      role: "rozgar ki talash jari hai",
      image:
        "https://smme.nust.edu.pk/wp-content/uploads/2019/12/screenshot-localhost-2019.12.jpg",
    },
    {
      id: 11,
      name: "Steven",
      role: "Software Developer",
      image:
        "https://images.pexels.com/photos/15940872/pexels-photo-15940872/free-photo-of-kitten-standing-atop-wall-under-blue-sky.jpeg",
    },
    {
      id: 12,
      name: "Juliat",
      role: "App Developer",
      image:
        "https://images.pexels.com/photos/16769489/pexels-photo-16769489/free-photo-of-woman-relaxation-water-summer.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    console.log("updateEmployee inside of app.js");
    const updatedEmployees = employees.map((employ) => {
      if (id === employ.id) {
        return { ...employ, name: newName, role: newRole };
      }
      return employ;
    });
    setEmployees(updatedEmployees);
  }

  function aikAur(newName, newRole, newImage) {
    console.log("new khap/ add new card inside of app.js");
    let another = {
      id: employees.length + 1,
      name: newName,
      role: newRole,
      image: newImage,
    };

    console.log(another);

    employees.map((employ) => {
      return console.log(employ);
    });

    return setEmployees([...employees, another]);
  }

  return (
    <div className="App">
      {/* onChange = {(e) => { setRole(e.target.value())}} */}

      <div className="flex flex-wrap justify-evenly">
        {employees.map((employee) => {
          const editEmployee = (
            <EditEmployee
              name={employee.name}
              role={employee.role}
              id={employee.id}
              updateEmployee={updateEmployee}
            />
          );

          return (
            <Card
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              image={employee.image}
              editEmployee={editEmployee}
              // updateEmployee={updateEmployee}
            />
          );
        })}
      </div>

      <AddEmployee aikAur={aikAur} />
    </div>
  );
}

export default App;
