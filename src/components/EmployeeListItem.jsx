import React from 'react'

function EmployeeListItem({name, position}) {
  return (
    <div style={{padding: "10px"}}>
      <div style= {{margin: "5px 9px"}}>{name}</div>
      <div style= {{color: "gray"}}>{position}</div>
    </div>
  )
}

export default EmployeeListItem