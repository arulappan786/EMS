import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function employeecreate() {
  const [empdata, setEmpdata] = useState({
    FisrtName: "",
    LastName: "",
    Age: 0,
    Gender: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/employee/create", { empdata })
      .then((res) => {
        alert("Data Added Successfully...!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h1>Add Student</h1>
          <div className="mb-2">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              id="FirstName"
              name="FirstName"
              required
              className="form-control"
              autoComplete="false"
              onChange={(e) =>
                setEmpdata({ ...empdata, FirstName: e.target.value })
              }
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              id="LastName"
              name="LastName"
              className="form-control"
              autoComplete="false"
              onChange={(e) =>
                setEmpdata({ ...empdata, LastName: e.target.value })
              }
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="Age">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              id="Age"
              name="Age"
              required
              className="form-control"
              autoComplete="false"
              onChange={(e) => setEmpdata({ ...empdata, Age: e.target.value })}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="Gender">Gender</label>
            <div>
              <input
                type="radio"
                value="Male"
                name="gender"
                onChange={(e) =>
                  setEmpdata({ ...empdata, Gender: e.target.value })
                }
              />
              Male
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={(e) =>
                  setEmpdata({ ...empdata, Gender: e.target.value })
                }
              />
              Female
              <input
                type="radio"
                value="Other"
                name="gender"
                onChange={(e) =>
                  setEmpdata({ ...empdata, Gender: e.target.value })
                }
              />
              Other
            </div>
          </div>
          <button id="btnSubmit" name="btnSubmit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default employeecreate;
