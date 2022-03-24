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
     <input name='firstname' type="text" onChange={handler}/>
     </label>
     <label>

     last Name
     <input name='lasttname' type="text" onChange={handler}/>
     </label>
     <label>

     Email
     <input name='email' type="text" onChange={handler}/>
     </label>
     <label>
     Phone
     <input name='phone' type="text" onChange={handler}/>
     </label>
     

    
    
    </div>
    </fieldset>
    <button className='form' onClick={handlerForm}>Add Profile</button>
    
    
    
    
    
    </form>
    
    </div>
  )
}

export default ProfileForm