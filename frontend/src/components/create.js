import React, {useState } from "react";
import {useNavigate} from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_API_URI
export default function Create() {
 const [form, setForm] = useState({
   building: "",
   time: "",
   gender:"",
   level: "",
   description: "None",
 });
 const navigate = useNavigate();
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
  //  alert(form.building);

   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch(BACKEND_URL + '/record/add', {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({building: "", time: "", gender: "", level: "", description: ""});
   navigate("/thank");
 }
 // This following section will display the form that takes the input from the user.
 return (
  <div>
    

  <div>
    

    <div style ={{
    background: "radial-gradient( "  + "AliceBlue" + ", " + "rgb(55, 100, 160)"  + ")",
    backgroundPosition: "center",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    
  }}>

<div>
<b><label style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans",  fontSize: "3.5vh", fontWeight: "bold" ,  position:"absolute", top:"2vh", left:"0vw" }}>CVHS Anonymous Tipper</label></b>
</div>

   <div style={{top:"60vh"}}>
     <form onSubmit={onSubmit}>

       <label htmlFor="building"> <span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans",  fontSize: "7vh", marginBottom: "100px"}}>Building</span></label>
       {/* <div>
       <select id = "building" name="building">  
       <option>  </option>  
       <option value="1000"> 1000 </option>  
       <option value="2000"> 2000 </option>  
       <option value="3000"> 3000 </option>  
       <option value="4000"> 4000 </option>  
       </select>  
       </div> */}
          <div className="form-group">
         <input
           type="text"
           maxlength="4"
           minlength="4"
           className="form-control"
           id="building"
           value={form.building}
           onChange={(e) => updateForm({ building: e.target.value })}
           
         />
        
        
       </div>
    

       <div className="form-group" class="field">

       <div className="form-check form-check-inline" >
           <input
             className="form-check-input"
             type="radio"
             name="gender"
             id="Girls"
             value="Girls"
             justifyContent= "space-around"
             checked={form.gender === "Girls"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="Girls" className="form-check-label"><span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans",  }}>Girls</span></label>
         </div>

         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="gender"
             id="Boys"
             value="Boys"
             justifyContent= "space-around"
             checked={form.gender === "Boys"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="Boys" className="form-check-label"><span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans"}}>Boys</span></label>
         </div>
         </div>

         <label htmlFor="building"> <span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans", fontSize: "7vh"}}>Time</span></label>
         <div className="form-group">
         <input
           type="time"
           className="form-control"
           id="time"
           justifyContent= "space-around"

           value={form.time}
           onChange={(e) => updateForm({ time: e.target.value })}
         />
       </div>

       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="type"
             id="Vaping"
             value="Vaping"
             
             checked={form.level === "Vaping"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="Vaping" className="form-check-label"><span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans"}}>Vaping</span></label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="type"
             id="Drugs"
             value="Drugs"
             checked={form.level === "Drugs"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="Drugs" className="form-check-label"><span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans"}}>Drugs</span></label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="type"
             id="Alcohol"
             value="Alcohol"
             checked={form.level === "Alcohol"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="Alcohol" className="form-check-label"><span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans"}}>Alcohol</span></label>
         </div>
         <br></br>
         <label htmlFor="description"><span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans", fontSize: "7vh"}}>Description </span></label>
         <div className="form-group">
         <input
           type="text"
           className="form-control"
           id="description"
           onClick="this.select()"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
        
       </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           style={{ fontFamily: "Open Sans"}}
           value="Submit"
           className="btn btn-primary"
           color= "rgb(29, 29, 29)"
         />
       </div>
       
     </form>
   </div>
   </div>
   </div>
   </div>

 );
}