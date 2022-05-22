import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Card() {
    const [users, setUsers] = useState([])

    const usersData = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=8'); setUsers(response.data.results)
      }
    
      useEffect(() => {
        usersData()
      }, [])

  return (
    <div>
     <div className="cardcontainer">
       {users.map((user, idx) => (  
      <div className="card">
        <div>
          <img src={user.picture.large} alt="" />
        </div>
        <div className="cardtitle">
          <h3>Name and Surname : {user.name.first} {user.name.last}</h3>
          <p>City : {user.location.city}</p>
          <p>Email : {user.email}</p>
        </div>
      </div>
    ))}
    </div>   

    </div>
  )
}
