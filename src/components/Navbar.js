import React from 'react';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/navbar.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { NavLink} from 'react-router-dom';
//logo
import logos from './assets/images/greylogo.png';

 const Navbars=()=>{
//   return(
//     <nav className="navbar navbar-expand-sm navbar-light ">
//       <NavLink className="navbar-brand" to="/"><img src={logos} alt="dsc_logo" className="dsclogo"/></NavLink>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">

//           <li className="nav-item ">
//             <NavLink className="nav-link " data-toggle="collapse" data-target=".navbar-collapse"  to="/">Home</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" data-toggle="collapse" data-target=".navbar-collapse"  to="/team">Team</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" data-toggle="collapse" data-target=".navbar-collapse"  to="/events">Events</NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
return(
  <Navbar bg="light" expand="lg">
        <Navbar.Brand to='./' className='dsclogo'><img src={logos}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <ul className="navbar-nav mr-auto">
           <li className="nav-item ">
             <NavLink className="nav-link "  to="/">Home</NavLink>
           </li>
           <li className="nav-item">
                 <NavLink className="nav-link"   to="/team">Team</NavLink> 
           </li>
           <li className="nav-item">
                 <NavLink className="nav-link"  to="/events">Events</NavLink>        
           </li>
          <li className="nav-item">
                 <NavLink className="nav-link"  to="/hackathon">Hackathon</NavLink> 
          </li> 
        </ul>
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>

);

}
export default Navbars;