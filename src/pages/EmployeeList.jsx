import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './styles.css'

const EmployeeList = ({history}) => {
  const { state, setState } = useContext(Context);
  const { employees = [] } = state;

  const deleteEmployee = (id) => {
    const response = window.confirm('Are you sure you want to delete ?');
    if (response) {
      const filteredList = state.employees.filter((emp) => emp.id != id)
      setState({...state, employees: filteredList})
    }
    console.log(response)
  }

  const editEmployee = (id) => {
    history.push(`/edit/${id}`, {id: id})
  }

  if (!employees || employees && employees.length == 0) {
    return  (
      <div>List is Empty</div>
    )
  }

  return (
    employees.map((emp) => {
      const {
        id,
        firstName,
        lastName,
        dob,
        designation,
        experience,
        profilePhoto
      } = emp;
      return (
        <div key={id} className="list-group">
          <div className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
              <span className='glyphicon glyphicon-edit edit-list' onClick={() => deleteEmployee(id)}></span>
              <span className='glyphicon glyphicon-edit edit-list' onClick={() => editEmployee(id)}></span>
              <h5 className="mb-1">Employee - {firstName} {lastName}</h5>
              <small>{designation}</small>
            </div>
            <ul className="list-group list-ground--color">
              <li className="list-group-item">Experience - {experience}</li>
              <li className="list-group-item">DOB - {dob}</li>
            </ul>
          </div>
        </div>
      )
    })
  )
}

export default EmployeeList