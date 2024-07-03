import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";
import Cookies from "js-cookie";

function LogIn() {
  // const host = import.meta.env.VITE_SERVER_HOST;
  // const port = import.meta.env.VITE_SERVER_PORT

const host = import.meta.env.VITE_SERVER_HOST;
const port = import.meta.env.VITE_SERVER_PORT;

function LogIn() {
  const navigate = useNavigate();

  //here put a initial value for inputs
  const initState = {
    email: "",
    password: "",
  };

  //This function for reduc the inputs to variable called state
  const reducer = (logInState, action) => {
    switch (action.type) {
      case "input":
        return { ...logInState, [action.field]: action.value };
      default:
        return logInState;
    }
  };

  const [logInState, dispatch] = useReducer(reducer, initState);

  //for we can write the input from user
  const handleChange = (e) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value,
    });
  };


  //`http://${host}:${port}/api/login`
  //the finale function whene submit and atake the variable for back end
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const res = await fetch('', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logInState),
    });
    

    if (res.status === 401) {

      alert("falid password or email");
    } else {
      const data = await res.json();
      console.log(data);
      const accessToken = data.accessToken;
      Cookies.set("accessToken", accessToken, { expires: 2 });

      navigate("/", { replace: true });
    }

    //     then((res)=>{
    //     if(res.status === 200){
    //       alert("success")
    //   }
    // }).then((data) =>{
    //   console.log(data)
    // })
    // .catch((e) =>{
    //   console.log(e)
    // })
      alert("Invalid email or password. Please try again");
    } else if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      const accessToken = data.access_token;
      Cookies.set("accessToken", accessToken, { expires: 2 });
      navigate("/", { replace: true });
    } else {
      alert("Something went wrong! Please try again");
    }
  };

  return (
    <div>
      <h1 className="login1">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={logInState.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={logInState.password}
            onChange={handleChange}
          />
        </label>

        <button
          className="login-btn"
          style={{ display: "block", margin: "1.5rem auto" }}
        >
          Login
        </button>
      </form>

      <p className="login2" style={{ textAlign: "center" }}>
        Not a member?<Link to={"/SignInPage"}>SignUp</Link>
      </p>
    </div>
  );
}

export default LogIn;
