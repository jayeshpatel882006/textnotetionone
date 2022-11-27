// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import Form from './Components/Form';
import Nevbar from './Components/Nevbar';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";




function App() {
  const [mode,setmode] =useState('white');
  const [alert,setalert] =useState(null);

  const showalert = (massage,type) =>{
    setalert({
    msg:massage,
    type:type
  })

    setTimeout(() => {
      setalert(null);
    }, 1400);
  }
  

 const togglemode = () =>{
  if(mode==='white'){
  setmode('#353935');//dark mode
  document.body.style.backgroundColor='#353935';
  showalert("Dark Mode is turnd on","success")
  
   }
 else{
  setmode('white');//white mode
  document.body.style.backgroundColor='white';
  showalert("Light Mode is turnd on","success")
   
}

 }
 
  return (
 
    <>
   <Nevbar mode={mode} title="Text Nation" home="Home" about="About" togglemode={togglemode}/>
             <Alert alert={alert}/>
{/* <Router>           
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
        */}
        {/* </Switch> */}
        <Form  name="Enter The Text Below" mode={mode} showalert={showalert}  togglemode={togglemode}/>             
        {/* </Router> */}
 
      </>  
  );
}

export default App;
