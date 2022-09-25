import React from 'react'

export const ClearBtn = (props) => {
  if(props.usrslnth.length !== 0){
    return (
      <div>
        <button className='btn btn-light btn-block' onClick={props.clrusrs}>Clear Users</button>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}
export default ClearBtn;