import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function employee() {
  const [emp, setEmp] = useState([]);

  // Initial load of the data when the page first loaded.
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employee")
      .then((res) => setEmp(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Delete the record from the database.
  function handleDelete(event, id) {
    event.preventDefault();
    axios
      .delete("http://localhost:8000/api/employee/delete/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.FirstName}</td>
                  <td>{data.LastName}</td>
                  <td>{data.Age}</td>
                  <td>{data.Gender}</td>
                  <td>
                    <Link
                      to={"/update/" + data.EmployeeId}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(event) => handleDelete(event, data.EmployeeId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default employee;
