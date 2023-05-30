import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Create from "./components/create";
import Thank from "./components/thank";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const App = () => {
 return (

     <Routes>
       <Route path="/" element={<Create />} />
       <Route path="/thank" element={<Thank />} />
     </Routes>
  //  </div>
 );
};

 
export default App;