import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../context/Context';
import EmployeeModel from '../model/Employee';
import './styles.css'

const ModifyEmployee = ({history, location, match}) => {
  console.log(history, location, match)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [designation, setDesignation] = useState('')
  const [experience, setExperience] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const [showEmployeeForm, setFormVisibility] = useState(true);
  const {state, setState } = useContext(Context)

  useEffect(() => {
    const targetEmployee = state.employees.find((emp) => emp.id = location.state.id) || {};
    console.log(targetEmployee)
    setFirstName(targetEmployee.firstName)
    setLastName(targetEmployee.lastName)
    setDob(targetEmployee.dob)
    setDesignation(targetEmployee.designation)
    setExperience(targetEmployee.experience)
    setProfilePhoto(targetEmployee.profilePhoto)
  }, [location.state.id])

  const updateEmployee = (e) => {
    e.preventDefault();
    const employee = new EmployeeModel(firstName, lastName, dob, designation, experience, profilePhoto);
    const employeeObj = employee.getEmployee();
    const employees = state.employees;
    employees.push({...employeeObj, id: state.employees.length + 1})
    // const _employees = employees.filter((emp) => emp.id != id)
    setState({...state, employees})
    setFormVisibility(false);
    console.log('Employees', employees)
  }

  const showEmployeeList = () => {
    // console.log(history, location, match)
    history.push('list')
  }

  const addMore = (e) => {
    e.preventDefault()
    setFormVisibility(true);
  }

  return (
    showEmployeeForm
    ? <form className='employee-form'>
        <div className="form-group">
          <label htmlFor="exampleInputFirstName">First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Enter firstname" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLastName">Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Enter lastname" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputDOB">DOB</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="form-control" id="exampleInputDOB" aria-describedby="emailHelp" placeholder="Enter firstname" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputDesignation">Designation</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} className="form-control" id="exampleInputDesignation" aria-describedby="emailHelp" placeholder="Enter firstname" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputProfilePhoto">Profile Photo</label>
          <input type="text" value={profilePhoto} onChange={(e) => setProfilePhoto(e.target.value)} className="form-control" id="exampleInputProfilePhoto" aria-describedby="emailHelp" placeholder="Enter firstname" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputExperience">Experience</label>
          <input type="text" value={experience}  onChange={(e) => setExperience(e.target.value)} className="form-control" id="exampleInputExperience" aria-describedby="emailHelp" placeholder="Enter firstname" />
        </div>
        <button type="button" onClick={updateEmployee} className="btn btn-primary">Modify</button>
        <button type="button" onClick={showEmployeeList} className="btn btn-primary show-all_route">Show All Employee</button>
      </form>
    : <div>
      <div className="alert alert-success" role="alert">
        Employee Updated Successfully !!
      </div>
      <a href="#" className="link-success" onClick={addMore}>Add More</a>
    </div>
  )
}

export default ModifyEmployee;