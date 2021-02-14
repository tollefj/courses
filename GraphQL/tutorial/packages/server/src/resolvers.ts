interface employeeInputType {
  id: number
};

interface Employee {
  name: string
  number: string
  officeLocation: string
}
interface employeeInput {
  employee: Employee
}

interface employeesInput {
  num: number,
  city: string
}

import employees from '../../../MOCK_DATA.json';
const getEmployee = (id: number) => employees[id];

export default {
  Query: {
    employee(obj: any, { id }: employeeInputType) {
      return getEmployee(id);
    },
    employees(obj: any, { num, city }: employeesInput) {
      let tmp = [...employees];
      if (city) {
        tmp = tmp.filter(
          (employee => employee.officeLocation === city));
      }
      return tmp.slice(0, num)
    }
  },
  Mutation: {
    addEmployee(obj: any, { employee } : employeeInput) {
      console.log("adding?", employee)
      const invalid = employees.filter((oldEmployee: Employee) => oldEmployee.name === employee.name).length >= 1;
      if (invalid) {
        return {
          success: false,
          message: employee.name + " already exists"
        }
      }
      employees.push(employee);
      return {
        success: true,
        message: "Added " + employee["name"]
      }
    }
  }
};
