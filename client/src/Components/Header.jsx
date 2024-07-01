import { Link } from "react-router-dom";
import Blog from "../assets/Blog.png";

function Header(props) {
  return (
    <div className="main">
      <div className="left-sec">
        <Link className="nav-link" to={"/"}>
          <img className="blog-logo" width="50px" height="50px" src={Blog} />
        </Link>
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/blogs"} className="nav-link">
          Blogs
        </Link>
      </div>


      <div className="right-sec">
        {props.isLoggedIn ? (
          <>
            <img
              style={{ width: "50px", height: "50px", borderRadius: "30px" }}
              src="https://via.placeholder.com/50"
              alt="user photo"
            />
            <p> &nbsp;musab alsayed</p>
            <Link className="nav-link" to={"/EditProfile"}>
              EditProfile
            </Link>
          </>
        ) : (
          <div className="user-info">
            <Link className="nav-link" to={"/LogInPage"}>
              LogIn
            </Link>
            <Link className="nav-link" to={"/SignInPage"}>
              SignIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;