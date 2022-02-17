import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


export default function LoginRegister()
{
    return(
        <React.Fragment>
            <div class="background">
            <div class="navbar">
               <div class="button">
                    <ul>
                         <li><a button class="btn-solid danger" /><Link to="/"> Home </Link></li>
                         <li><a button class="btn-solid danger" /><Link to="/login-register"> Login/Register </Link></li>
                         {/* <li><a button class="btn-solid danger" /><Link to="/login"> Login </Link></li>             */}
                     </ul> 
            
                 </div>
             </div>

 <h5><center>This is a mini project for basic user registration and login.</center></h5>

     <div class="login-box">
        <div class="row">
            <div class="col-md 12 login-left">
                <h2> USER LOGIN </h2>
                <h5> Already Registered ? </h5>
                <br></br>
                <h4>Login to your registered account</h4>
                <form></form>
                    <div class="form-group">
                        <label> Email</label>
                        <input type="text" name="user" class="form-control" required  />
                    </div>
                    <div class="form-group">
                     <label> Password</label>
                     <input type="password" name="password" class="form-control" required  />
                    </div>
                    <button type="submit" class="btn btn-primary"> Login </button>
                {/* </form> */}
            </div>
            <div class="col-md-6 login-right">
                <h2> REGISTER </h2>
                <h5> NEW USER  ??  REGISTER HERE</h5>
                <form ></form>
                <div class="form-group">
                        <label> Firstname</label>
                        <input type="text" name="user" class="form-control" required   />
                    </div>
                    <div class="form-group">
                        <label> Lastname</label>
                        <input type="text" name="user" class="form-control" required  />
                    </div>
                    <div class="form-group">
                        <label> E-mail address</label>
                        <input type="email" name="user" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label> Contact Number</label>
                        <input type="text" name="user" class="form-control" required  />
                    </div>
                    <div class="form-group">
                   <label> Password</label>
                   <input type="password" name="password" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary"> Register </button>
                {/* </form> */}
            </div>
    </div>
    </div>
</div>

        </React.Fragment>
    )
}