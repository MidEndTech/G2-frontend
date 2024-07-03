import React from "react";
import "./EditProfile.css";
import { Link } from 'react-router-dom';



const EditProfile = () => {
  return (
    
    <form className="form-edit">
      
      <div className="container">
        <div className="form-name">
          <label htmlFor="firstName" className="lbl">
            First Name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-name">
          <label htmlFor="lastName" className="lbl">Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-email">
          <label htmlFor="email">Email</label>
          <input type="email" className="email" />
        </div>
        <div className="form-bio">
          <lable htmlFor="bio">Bio</lable>
          <input type="text" className="bio" />
        </div>
        <div className="form-number">
        <label>Passoword</label>
        <input type="password" className="password" />
        </div>
        <div className="form-number">
        <label>Confirm Passoword</label>
        <input type="password" className="password" />
        </div>
        
        
        <div className="form-password">
        <label htmlFor="number">Contact Number</label>
        <input type="number" className="contact" />
        </div>
        <button>Save</button>
        <button><Link to={"/ProfilePage"}>Cancel</Link></button>
      </div>
    </form>
  );
};

export default EditProfile;
