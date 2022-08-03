import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
    <div className="text-center mt-5">
        <h1>This the App Name</h1>
        <p>
            Welcome to (the App) where you can test your coding knowledge. Good Luck
        </p>
        <div>
        <form>
    <div className="epw">       
  <div class="form-group">
    <p>Returning Users:</p>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  < Link to="/userhome">
<button type="submit" className="btn btn-primary mt-2">Submit</button>
</Link>
  </div>
</form>
<div classname="register">
    <h3>New User? Create an Account</h3>
	<Link to="/createaccount">
    <button className="btn btn-success">Create an Account</button>
	</ Link>
</div>
        </div>
    </div>
);
