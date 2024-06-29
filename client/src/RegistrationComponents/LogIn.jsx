// (c)Musab Alsayed / MID-END

import { useReducer } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  //here put a initial value for inputs
  const initState = {
    Email: "",
    Password: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logInState); // this state has informtions of log in

    //aftar submit open console for check the use informtions
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">
          Email:
          <input
            type="email"
            name="Email"
            id="Email"
            value={logInState.Email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="Password">
          Password
          <input
            type="password"
            name="Password"
            id="Password"
            value={logInState.Password}
            onChange={handleChange}
          />
        </label>

        <button>Login</button>
      </form>
      <p>
        Not a member?<Link to={"/SignInPage"}>SignIn</Link>
      </p>
    </div>
  );
}

export default LogIn;
