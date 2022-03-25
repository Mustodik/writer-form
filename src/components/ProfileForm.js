import React, { useState } from 'react'

function ProfileForm({submit}) {
    const [Profile, setProfile] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
    });

    const handler =(event) =>{
        setProfile((prev)=>({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
 const handlerForm =(e)=>{
     e.preventDefault();
     submit(Profile)
 };



  return (
    <div className='formContainer'>
    <h3>ProfileForm</h3>



    <form>
    <fieldset>
    <legend>Bio Data</legend>

    <div className='names'>
     <label>
     First Name
     <input name='firstname' value={Profile.firstname}  onChange={handler} type="firstname"/>

     </label>

     <label>
     last Name
     <input name='lastname' value={Profile.lastname}  onChange={handler} type="lastname"/>

     </label>
     </div>

<div className='names'>
     <label>
     Email
     <input name='email' value={Profile.email}  onChange={handler} type="email"/>

     </label>

     <label>
     Phone
     <input name='phone' value={Profile.phone}  onChange={handler} type="tel"/>
     </label>
    
    </div>
    </fieldset>
    <button className='form' onClick={handlerForm}>Add Profile</button>
    
    
    
    
    
    </form>
    
    </div>
  )
}

export default ProfileForm