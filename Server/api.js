var dboperations = require("./dboperations");
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

var port = process.env.port || 8000;

app.listen(port, () => {
  console.log("Employee API is running at ", port);
});

// Get all the employees.
app.route("/api/employee").get((request, response) => {
  dboperations.getEmployees().then((result) => {
    return response.status(200).json(result[0]);
  });
});

// Get single employee by id.
app.route("/api/employee/:id").get((request, response) => {
  dboperations.getEmployee(request.params.id).then((result) => {
    return response.status(200).json(result[0]);
  });
});

// Create a new employee.
app.route("/api/employee/create").post((request, response) => {
  let emp = { ...request.body.empdata };
  console.log(emp);
  dboperations
    .addEmployee(emp.FirstName, emp.LastName, emp.Age, emp.Gender)
    .then((result) => {
      return response.status(201).json(result[0]);
    });
});

// Update a new employee.
app.route("/api/employee/update").put((request, response) => {
  let emp = { ...request.body.empdata };
  console.log(emp);
  dboperations
    .updateEmployee(emp.EmployeeId, emp.FirstName, emp.LastName, emp.Age, emp.Gender)
    .then((result) => {
      return response.status(200).json(result[0]);
    });
});

// Delete a single employee by id.
app.route("/api/employee/delete/:id").delete((request, response) => {
  console.log(request.params.id);
  dboperations.deleteEmployee(request.params.id).then((result) => {
    return response.status(200).json(result[0]);
  });
});
