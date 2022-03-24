import React from 'react'

function ProfileCard({Card}) {
  return (
    <div className='greenCard'>
    <h3>{Card.firstname} {Card.lastname}</h3>
    <p>{Card.email}</p>
    <p>{Card.phone}</p>
    </div>
  )
}

export default ProfileCard