import React from 'react'

// import { Link } from "react-router-dom"
// import {  NavLink } from 'react-router-dom'


export default function Nevbar(props) {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:props.mode==='white'?'white':'black'}}>
    {/* <nav className="navbar navbar-expand-lg" style={{backgroundColor:props.mode==='white'?'#353935':'white'}}> */}
    
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
    <a className="navbar-brand" href="/" style={{color:props.mode==='white'?'black':'white'}}>{props.title}</a>
    {/* <NavLink className="navbar-brand" To="/" style={{color:props.mode==='white'?'black':'white'}}>{props.title}</NavLink> */}
    {/* <Link className="navbar-brand" as="/" style={{color:props.mode==='white'?'black':'white'}}>{props.title}</Link> */}
    {/* <NavLink className="navbar-brand" as='/'>{props.title}</NavLink> */}
    </li>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        {/* </li> */}
      </ul>
   {/* <a href="/" className="nav-link active" aria-current="page"  style={{color:props.mode==='white'?'black':'white'}}  >{props.home}</a> */}
   {/* <Link to="/" className="nav-link active" aria-current="page"  style={{color:props.mode==='white'?'black':'white'}}  >{props.home}</Link> */}
   
        
      {/* <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
      <a href="/about" className="nav-link active" aria-current="page"  style={{color:props.mode==='white'?'black':'white'}} >{props.about}</a> */}
      {/* <NavLink to="/about" className="nav-link active" aria-current="page"  style={{color:props.mode==='white'?'black':'white'}} >{props.about}</NavLink> */}
      {/* <Link as="/about" className="nav-link" style={{color:props.mode==='white'?'black':'white'}} >{props.about}</Link> */}
      {/* <NavLink as="/about" className="nav-link" style={{color:props.mode==='white'?'black':'white'}} >{props.about}</NavLink> */}
        {/* </li>
      </ul>
      </div> */}
    


    </div>
  <div className={`custom-control custom-switch text-${props.mode==='white'?'black':'white'}`}>
  <input type="checkbox" onClick={props.togglemode} className="custom-control-input " id="customSwitch"/>
  <label className="custom-control-label " lFor="customSwitch"> Enabal Dark Mode </label>
</div>
  </div>
</nav>




</>
  )
}
