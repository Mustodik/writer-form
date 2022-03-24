import React, { useState } from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'
function App() {
  const[allProfiles, setAllProfiles]=useState([
  {
    firstname:"Mustodik",
    lastname:"Ibrahim",
    email:"dawbiemusodiq30@gmail.com",
    phone:"0276383996"
  }

  ])
  const updateProfiles = (profile)=>{
    let arr =allProfiles;
    arr. push(profile);
    setAllProfiles([...arr]);
  }



  return (
    <div className='app'>
    <h1>Profile Maker</h1>
    <ProfileForm submit={updateProfiles}/>
    <hr/>
    <div className='list'>
    {allProfiles.map((person,index)=>(
      <ProfileCard key={index} Card={person}/>
    ))}
    
    
    </div>
    
    
    </div>
  )
}

export default App