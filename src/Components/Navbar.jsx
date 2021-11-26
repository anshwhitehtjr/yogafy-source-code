import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
   let location = useLocation();

   const handleLogout = () => {
      localStorage.clear()
      window.location.reload()
   }

   return (
      <>
         <nav className={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">{ props.title }</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className={ `nav-link ${location.pathname === "/" ? "active" : ""}` } aria-current="page" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className={ `nav-link ${location.pathname === "/about" ? "active" : ""}` } to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className={ `nav-link ${location.pathname === "/classes" || location.pathname === '/classes/scheduleclass' ? "active" : ""}` } to="/classes">Classes</Link>
                     </li>
                  </ul>
                  {
                     !localStorage.getItem('token')
                        ?
                        <>
                           <Link to='/login' className="btn mx-1 btn-primary">
                              Login
                           </Link>
                           <Link to='/signup' className="btn mx-1 btn-primary">
                              Signup
                           </Link>
                        </>
                        : <button onClick={ handleLogout } className="btn btn-primary">Logout</button>
                  }
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar