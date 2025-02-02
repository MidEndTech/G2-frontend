import { Link } from "react-router-dom";
import "../styles/header.css";
import logo1 from "../assets/logoblog.jpg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";




function Header() {

  const [useName, setUseName] = useState({});

  const user = Cookies.get("accessToken");
  console.log(user)

  useEffect(()=>{
    Axios.get("https://group-two.midend.tech/api/profile/",{
      headers:{Authorization:`Bearer ${user}`}
    }).then((res) =>{
      setUseName(res.data.data);
    })
  },[])

  const navigate = useNavigate();
  
  function HandleLogOut() {
    Cookies.remove("accessToken");
    navigate("/", { replace: true });
  }

  function isLoggedIn() {
    const user = Cookies.get("accessToken");

    if (user !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  
  if (isLoggedIn()) {
    return (
      <div className="buttons">
        <div className="main">
          <img
            src={logo1}
            alt="logo"
            style={{ width: "55px", height: "auto" }}
          />
          <h1 className="header"></h1>

          <>n
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                {" "}
                <Link to={"/MostReader"}>Trend of Readers</Link>
              </li>
              <li>
                <Link to={"/Leaderbords"}>Trend of likes</Link>
              </li>
              <li>
                {" "}
                <Link to={"/BlogVe"}>Bloges</Link>
              </li>
              <li>
                <button className="btn1" onClick={HandleLogOut}>log Out</button>
              </li>
              <li>
                <Link to={"/ProfilePage"}>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "30px",
                    }}
                    src="https://via.placeholder.com/50"
                    alt="user photo"
                  />
                  <p style={{ color: "green" }}> &nbsp;{useName.name} {useName.lastname}</p>
                </Link>
              </li>
            </ul>
          </>
        </div>
      </div>
    );
  } else{
    return (
      <div className="buttons">
        <div className="main">
          <img
            src={logo1}
            alt="logo"
            style={{ width: "55px", height: "auto" }}
          />
          <h1 className="header"></h1>
          <>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                {" "}
                <Link to={"/MostReader"}>Trend of Readers</Link>
              </li>
              <li>
                <Link to={"/Leaderbords"}>Trend of likes</Link>
              </li>
              <li>
                {" "}
                <Link to={"/BlogVe"}>Bloges</Link>
              </li>
              <button className="btn1">
                {" "}
                <Link to={"/LogInPage"}>Login</Link>
              </button>
              <button className="btn2">
                {" "}
                <Link to={"/SignInPage"}>SignUp</Link>
              </button>
            </ul>
          </>
        </div>
      </div>
    );
  }
}

export default Header;