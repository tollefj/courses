import * as React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import './styles.css';
import { string } from 'prop-types';

const GET_EMPLOYEES = gql`
  query getEmployees($num: Int, $city: String) {
    employees(num: $num, city: $city) {
      name
      number
      officeLocation
    }
  }
`;

const ADD_EMPLOYEE = gql`
  mutation addEmployee($employee: Employee) {
    addEmployee(employee: $employee) {
      success
      message
    }
  }
`;

const offices = ["Trondheim", "Stavanger", "Oslo", "Bergen", "Fredrikstad", "Nordpolen"];

interface Employee {
  __typename: string;
  name: string;
  number: string;
  officeLocation: string;
}

const App = () => {
  const [num, setNum] = React.useState(10);
  const [city, setCity] = React.useState("Trondheim");
  const [addEmployee] = useMutation(ADD_EMPLOYEE);

  const { loading: employeesLoading, error: employeesError, data: employeesData } = useQuery(GET_EMPLOYEES, {
    variables: {
      num, city
    },
    pollInterval: 500
  })

  if (employeesError) {
    return (
      <pre>Error loading data</pre>
    )
  }

  return (
    <>
      <pre>GraphQL running on port <a href="http://localhost:8080/graphiql">8080</a></pre>
      <p>Number of employees to show: {num}</p>
      <div className="slidecontainer">
        <input type="range" min="1" max="30" value={num} className="slider" id="myRange" onChange={(e) => {
          const val: number = parseInt(e.target.value);
          if (!isNaN(val)) {
            setNum(val)
          }
        }}/>
      </div>
      <span>
        <select name="cities" onChange={(e) => setCity(e.target.value)}>
          {offices.map((office) => <option key={office} value={office}>{office}</option>)}
        </select>
      </span>
      <p></p>
      {employeesLoading ? (
        <pre>Loading employees...</pre>
      ) : (
        <div id='content'>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Office</th>
              </tr>
              {employeesData.employees.map((employee: Employee) => (
                  <tr key={employee.name + employee.officeLocation}>
                    {Object.keys(employee).filter((e) => e !== '__typename').map((emplField) => <th key={emplField}>{employee[emplField]}</th>)}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
};

export default App;
