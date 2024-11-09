import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList({employees}) {
  return (
    <div>
      {employees.map((employee) => (
        <EmployeeListItem key={employee.name} name={employee.name} position={employee.position} />
      ))}
    </div>
  )
}

export default EmployeeList