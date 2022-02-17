import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
export default function Home()
{
    return(
        <React.Fragment>
            <div className='backgroundone'>
            <div class="navbar">
            <div class="button">
            <ul>
                         <li><a button class="btn-solid danger" /><Link to="/"> Home </Link></li>
                         <li><a button class="btn-solid danger" /><Link to="/login-register"> Login/Register </Link></li>
                         {/* <li><a button class="btn-solid danger" /><Link to="/login"> Login </Link></li>             */}
                     </ul> 
            
                 </div>
             </div>
<center>
 <h4>Welcome to User Registration and Login</h4>
 <br></br>
 <img src='../assets/images/login.jpg' height="500" width="400" alt=" " />
 <img src='../assets/images/signup.jpg' height="500" width="400" alt=" " />
 <br></br>
 <h5>If you are a new user and wnat to register, please fill in the details below to create an account.
     <br></br> Once you have registered, use the valid credentials to login into your account.
     <br></br>
     It is mandatory to reegister youself before you login.
 </h5>
  </center>
  </div>
        </React.Fragment>
    )
}