import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../data/employeeData";
import { Table } from "reactstrap";

export default function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  const getEmployeeDetails = () => {
    getEmployeeById(id).then(setEmployee);
  };

  useEffect(() => {
    getEmployeeDetails();
  }, [id]);

  if (!employee) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">ID</th>
          <td>{employee.id}</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{employee.specialty}</td>
        </tr>
      </tbody>
    </Table>
  );
}
