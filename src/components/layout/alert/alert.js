import React from 'react'

const Alert = (props) => {
  return (
    <div className="alert alert-light my-alert" style={props.alertStyle}>
      <h1>Enter a name first.</h1>
    </div>
  )
}

export default Alert
