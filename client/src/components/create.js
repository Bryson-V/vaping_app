import React, {useState } from "react";
import {useNavigate} from "react-router-dom";
import background from "./CVHS.png";
// import { Text, StyleSheet } from 'react-native';
export default function Create() {
 const [form, setForm] = useState({
   building: "",
   level: "",
   description: "",
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
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:3000/record/add", {
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
 
   setForm({building: "", level: "", description: ""});
   navigate("/thank");
 }

 // This following section will display the form that takes the input from the user.
 return (
  <div>
        <text>
     <h3>Vaping Submit Form</h3>
     </text>
     <div style ={{
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }}>
   <div style = {{
    backgroundColor: "white",
    backgroundPosition: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "80",
    width: "50vh",
    borderRadius: "10px",
   }}>
     <form onSubmit={onSubmit}>
       <div className="form-group">
       <label htmlFor="building"> <span style={{color: 'blue', fontFamily: "Chilanka", fontStyle: "italic", fontSize: 30}}>Building</span></label>
         <input
           type="text"
           className="form-control"
           id="building"
           value={form.building}
           onChange={(e) => updateForm({ building: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Vaping"
             
             checked={form.level === "Vaping"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label"><span style={{color: 'blue', fontFamily: "Chilanka", fontStyle: "italic"}}>Vaping</span></label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Drugs"
             checked={form.level === "Drugs"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label"><span style={{color: 'blue', fontFamily: "Chilanka", fontStyle: "italic"}}>Drugs</span></label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Alcohol"
             checked={form.level === "Alcohol"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label"><span style={{color: 'blue', fontFamily: "Chilanka", fontStyle: "italic"}}>Building</span></label>
         </div>
         <br></br>
         <label htmlFor="description"><span style={{color: 'blue', fontFamily: "Chilanka", fontStyle: "italic", fontSize: 30}}>Description</span></label>
         <div className="form-group">
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
         
       </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Submit Form"
           className="btn btn-primary"
         />
         
       </div>
     </form>
   </div>
   </div>
   </div>
 );
}