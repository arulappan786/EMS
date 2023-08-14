const dbConfig = require("./dbconfig");
const sql = require("mssql/msnodesqlv8");

// To fetch all the employee details from the underlying data store.
async function getEmployees() {
  try {
    let pool = await sql.connect(dbConfig);
    let employees = await pool.request().query("SELECT * FROM Employee");
    return employees.recordsets;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// To fetch a particular employee details from the underlying data store.
// for the given employeeid.
async function getEmployee(employeeid) {
  try {
    let pool = await sql.connect(dbConfig);
    let employees = await pool
      .request()
      .input("employeeid", sql.Int, employeeid)
      .query("SELECT * FROM Employee WHERE EmployeeId = @employeeid");
    return employees.recordsets;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// To add a new employee into the data store using the suplied employee details.
async function addEmployee(firstname, lastname, age, gender) {
  try {
    let pool = await sql.connect(dbConfig);
    let insertEmployee = await pool
      .request()
      .input("FirstName", sql.VarChar, firstname)
      .input("LastName", sql.VarChar, lastname)
      .input("Age", sql.Int, age)
      .input("Gender", sql.VarChar, gender)
      .execute("spInsertEmployee");
    return insertEmployee.recordsets;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// To update a particular emplyee details for the given employeeid.
async function updateEmployee(employeeid, firstname, lastname, age, gender) {
  try {
    let pool = await sql.connect(dbConfig);
    let insertEmployee = await pool
      .request()
      .input("EmployeeId", sql.Int, employeeid)
      .input("FirstName", sql.VarChar, firstname)
      .input("LastName", sql.VarChar, lastname)
      .input("Age", sql.Int, age)
      .input("Gender", sql.VarChar, gender)
      .execute("spUpdateEmployee");
    return insertEmployee.recordsets;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// To permenantly delete an employee for the given employeeid.
async function deleteEmployee(employeeid) {
  try {
    let pool = await sql.connect(dbConfig);

    let employees = await pool
      .request()
      .input("employeeid", sql.Int, employeeid)
      .query("DELETE FROM Employee WHERE EmployeeId = @employeeid");
    return employees.recordsets;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getEmployees: getEmployees,
  getEmployee: getEmployee,
  addEmployee: addEmployee,
  updateEmployee: updateEmployee,
  deleteEmployee: deleteEmployee,
};
