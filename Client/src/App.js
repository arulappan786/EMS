import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './employee'
import EmployeeCreate from './employeecreate'
import EmployeeUpdate from './employeeupdate'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee />}></Route>
          <Route path="/create" element={<EmployeeCreate />}></Route>
          <Route path="/update/:id" element={<EmployeeUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
