import React from 'react';
import EmployeeForm from './employeeForm';
import NewEmployeeForm from './newEmployeeForm';
import { dataApi } from '../rest/DataApi';

export default class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }

    this.addNewEmployee = this.addNewEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  render() {
    let employeeRecords = this.state.employees.map(employee => {
      return <EmployeeForm {...employee} key={employee._id} 
        deleteEmployee={this.deleteEmployee} 
        updateEmployee={this.updateEmployee}
        />
    });

    let divStyle = {
      margin: '5px 0px'
    }
        
    return (
        <div>
          <div>
            <h2>Employee</h2>
            <NewEmployeeForm addNewEmployee={this.addNewEmployee} />
          </div>
          <div className='App'>
            <h2>Employees</h2>
            <div style={divStyle}>
              <label
                className='employee100'>
                Name: 
              </label>
              <label
                className='employee100'>
                Age: 
              </label>
              <label
                className='employee100'>
                Country: 
              </label>
              <label
                className='employee100'>
                Position: 
              </label>
              <label
                className='employee100'>
                Wage (Year): 
                </label>
              <label
                className='employee300'>
                Process 
                </label>
              <label
                className='employee200'>
                ID 
                </label><br></br>
            </div>
              {employeeRecords}
          </div>
        </div>
    );
  }

  updateData = async() => {
    const employees = await dataApi.get();
    this.setState({ employees });
  }

  componentDidMount() {
    this.updateData();
  }

  addNewEmployee = async(employee) => {
    await dataApi.create(employee);
    this.updateData();
  }

  updateEmployee = async(employee) => {
    console.log(employee);
    await dataApi.update(employee);
    this.updateData();
  }

  deleteEmployee = async(_id) => {
    await dataApi.delete(_id);
    this.updateData();
  }
}
