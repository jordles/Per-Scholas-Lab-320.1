import React from 'react'

function EmployeeListItem({name, position}) {
  return (
    <>
      <h4>{name}</h4>
      <div style= {{color: "gray"}}>{position}</div>
    </>
  )
}

export default EmployeeListItem