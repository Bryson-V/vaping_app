import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import MyImage from './CVHS.png';
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" href="https://www.gusd.net/CVHS">
       <img style={{"width" : 10 + '%'}} src={MyImage} alt="CVHS Falcon"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="true"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
         <div class="dropdown-content">
         <NavLink className="nav-link" to="/create">
               Submit Form
             </NavLink>
             <NavLink className="nav-link" to="/">
               Home
             </NavLink>
         </div>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/">
               Home
             </NavLink>
           </li>
         </ul>
       </div>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Submit Form
             </NavLink>
           </li>
         </ul>
       </div>
       
     </nav>
   </div>
 );
}