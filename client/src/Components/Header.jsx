import { Link } from "react-router-dom";
import "../styles/header.css";
import Cookies from "js-cookie";

function Header() {
  
  function HandleLogOut() {
    Cookies.remove("accessToken");
  }

  function isLoggedIn() {
    const user = Cookies.get("accessToken");

    if (user !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(Cookies.get("accessToken"));

  if (isLoggedIn()) {
    return (
      <div className="buttons">
        <div className="main">
          <img
            src="src\assets\logoblog.jpg"
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
              <li>
                <button onClick={HandleLogOut}>log Out</button>
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
                  <p style={{ color: "green" }}> &nbsp;musab alsayed</p>
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
            src="src\assets\logoblog.jpg"
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

  // return (
  //   <div className="buttons">
  //     <div className="main">
  //       <img
  //         src="src\assets\logoblog.jpg"
  //         alt="logo"
  //         style={{ width: "55px", height: "auto" }}
  //       />
  //       <h1 className="header"></h1>

  //       {isLoggedIn() ? (
  //         <>
  //           <ul>
  //             <li>
  //               <Link to={"/"}>Home</Link>
  //             </li>
  //             <li>
  //               {" "}
  //               <Link to={"/MostReader"}>Trend of Readers</Link>
  //             </li>
  //             <li>
  //               <Link to={"/Leaderbords"}>Trend of likes</Link>
  //             </li>
  //             <li>
  //               {" "}
  //               <Link to={"/BlogVe"}>Bloges</Link>
  //             </li>
  //             <li>
  //               <button onClick={HandleLogOut}>log Out</button>
  //             </li>
  //             <li>
  //             <Link to={"/ProfilePage"}>
  //               <img
  //                 style={{
  //                   width: "50px",
  //                   height: "50px",
  //                   borderRadius: "30px",
  //                 }}
  //                 src="https://via.placeholder.com/50"
  //                 alt="user photo"
  //               />
  //               <p style={{ color: "green" }}> &nbsp;musab alsayed</p>
  //             </Link>
  //             </li>
  //           </ul>
  //         </>
  //       ) : (
  //         <>
  //           <ul>
  //             <li>
  //               <Link to={"/"}>Home</Link>
  //             </li>
  //             <li>
  //               {" "}
  //               <Link to={"/MostReader"}>Trend of Readers</Link>
  //             </li>
  //             <li>
  //               <Link to={"/Leaderbords"}>Trend of likes</Link>
  //             </li>
  //             <li>
  //               {" "}
  //               <Link to={"/BlogVe"}>Bloges</Link>
  //             </li>
  //             <button className="btn1">
  //               {" "}
  //               <Link to={"/LogInPage"}>Login</Link>
  //             </button>
  //             <button className="btn2">
  //               {" "}
  //               <Link to={"/SignInPage"}>SignUp</Link>
  //             </button>
  //           </ul>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default Header;