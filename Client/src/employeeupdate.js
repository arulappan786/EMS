import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function employeeupdate() {
  const { id } = useParams();
  const [emp, setEmp] = useState([]);

  // Initial load of the data when the page first loaded.
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employee/" + id)
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
        console.log(emp);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const [empdata, setEmpdata] = useState({
    EmployeeId: id,
    FisrtName: "",
    LastName: "",
    Age: 0,
    Gender: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:8000/api/employee/update", { empdata })
      .then((res) => {
        console.log(res);
        alert("Data Updated Successfully...!");
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
          <h1>Update Student</h1>
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
              value={emp.FirstName}
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
              // defaultValue={lastname}
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
              // defaultValue={age}
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
                // defaultChecked={gender==='Male'}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={(e) =>
                  setEmpdata({ ...empdata, Gender: e.target.value })
                }
                // defaultChecked={gender==='Female'}
              />
              Female
              <input
                type="radio"
                value="Other"
                name="gender"
                onChange={(e) =>
                  setEmpdata({ ...empdata, Gender: e.target.value })
                }
                // defaultChecked={gender==='Other'}
              />
              Other
            </div>
          </div>
          <button id="btnSubmit" name="btnSubmit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default employeeupdate;
