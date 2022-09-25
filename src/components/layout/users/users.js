import React from 'react'
import UserItem from './userItem'
import Spinner from '../navbar/spinner'
const Users = (props) => {
    if(props.loading){
      return (
        <Spinner />
      )
    } else {
      return (
        <div style={usersStyle}>
          {props.users.map((user, index) => (
            <UserItem key= {user.id} user={user} indexx={index}/>
          ))}
        </div>
      )

    }
    
}
const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
