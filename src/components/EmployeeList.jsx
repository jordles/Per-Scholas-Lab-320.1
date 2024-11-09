import React from 'react'
import EmployeeListItem from './EmployeeListItem'
function EmployeeList() {
  return (
    <div>
      <EmployeeListItem name="James King" position="President and CEO" />
      <EmployeeListItem name="Julie Taylor" position="VP of Marketings" />
      <EmployeeListItem name="Eugene Lee" position="CFO" />
      <EmployeeListItem name="John Williams" position="VP of Engineering" />
      <EmployeeListItem name="Ray Moore" position="VP of Sales" />
      <EmployeeListItem name="Paul Jones" position="QA Manager" />
    </div>
  )
}

export default EmployeeList