import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Cookie from "js-cookie"

import "./login.css";
import Cookies from "js-cookie";



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

  //the finale function whene submit and atake the variable for back end
  const handleSubmit = async(e) => {
    e.preventDefault();
     const res = await fetch("http://192.168.8.32:8000/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(logInState)
      });
        if(res.status === 401){
          navigate("/", { replace: true });
        }else{
          const data = await res.json()
          console.log(data)

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

        <button className="login-btn" style={{display: 'block',
    margin: '1.5rem auto',}}>Login</button>
      </form>
      
      <p className="login2" style={{ textAlign: "center" }}>
        Not a member?<Link to={"/SignInPage"}>SignUp</Link>
      </p>
    </div>
  );
}

export default LogIn;
