import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "../styles/Banner.css";

function Banner() {

  const [dataInfo, setData] = useState({});

    const user = Cookies.get("accessToken");
    console.log(user)

    useEffect(()=>{

      Axios.get("https://group-two.midend.tech/api/profile/",{
        headers:{Authorization:`Bearer ${user}`}
      }).then((res) =>{
          setData(res.data.data);
      })
    },[])

    console.log(dataInfo.name)



  return (
    <div className="banner-container">
      <img
        className="banner-image"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Banner"
      />
      <Link className="banner-edit-link">Edit Cover Photo</Link>

      <div className="banner-profile">
        <img
          className="banner-profile-image"
          src="https://i.pravatar.cc/80"
          alt="User Profile"
        />
        <div className="banner-info">
          <h2 className="banner-name">{dataInfo.name} {dataInfo.lastname}</h2>
          <p className="banner-bio">This is the user's bio.</p>
          <Link className="banner-edit-profile" to={"/EditProfile"}>
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
