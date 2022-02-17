import React from 'react'
import { Link } from 'react-router-dom'
import auth from './firebase-config'
export default function LoginHome()
{
    return(
        <React.Fragment>
            <div class="navbar">
              <div class="button">
            <ul>
                         <li><a button class="btn-solid danger" /><Link to="/"> Home </Link></li>
                         <li><a button onClick={logout} class="btn-solid danger" /><Link to="/login-register"> Logout </Link></li>
                         
                         {/* <li><a button class="btn-solid danger" /><Link to="/login"> Login </Link></li>             */}             
                     </ul> 
            
                 </div>
             </div>

             <center>
 <h5>Welcome to User Registration</h5>
 <br></br>
 {auth.currentUser.email}
  </center>
 
        </React.Fragment>
    )
}