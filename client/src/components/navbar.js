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
       <ul>
        <li><a href="/" class= "link-secondary">Home</a></li>
        <li><a href="/create" class="btn btn-primary stretched-link">Submit</a></li>
       </ul>
     </nav>
   </div>
 );
}