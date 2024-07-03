// (c)Musab Alsayed / MID-END
import React, { useEffect, useReducer } from "react";
import "../styles/signIn.css"
import Axios from "axios"


function SignIn() {

    //************ i will use this functions leaters ************************************************************************
//here put a initial value for inputs
 const initState = {
    email:"",
    password:"",
    name:"",
    lastname:"",
    errors:{},
}


//This function for reduc the inputs to variable called state
const reducer = (signInState,action) => {
    switch(action.type){
        case "input":
            return {...signInState,[action.field] : action.value};
        case "setErrors":
            return {...signInState,errors:action.errors}
        default:
            return signInState;
    }
  };

  const [signInState, dispatch] = useReducer(reducer, initState);

  const validateField = (name, value) => {
    const errors = { ...signInState.errors };
    switch (name) {
      case "email":
        if (
          !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            value
          )
        ) {
          errors.email = "your email is not falid ";
        } else {
          delete errors.email;
        }
        break;

      case "password":
        if (value.length < 8) {
          errors.password = "password must be at least 8 characters";
        }else {
          delete errors.password;
        }
        break;

      default:
        break;
    }
    return errors;
  };

  //for we can write the input from user
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = validateField(name, value);
    dispatch({
      type: "input",
      field: name,
      value: value,
    });
    dispatch({
      type: "setErrors",
      errors: newErrors,
    });
  };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate fields
        const errors = validateField();
        if (Object.keys(errors).length > 0) {
            dispatch({ type: 'setErrors', errors });
            return;
        }
        
        try {
            // Make the POST request using Axios
            const response = await Axios.post("https://group-two.midend.tech/api/register", {
                name: signInState.name,
                lastname: signInState.lastname,
                email: signInState.email,
                password: signInState.password,
            });
    
            // Handle response data
            console.log(response.data);
            const data = await response.json()

            
            // Optionally, you can dispatch success actions or handle UI state here
        } catch (error) {
            // Handle error
            console.error('Error registering user:', error);
            // Optionally, dispatch error actions or handle UI state for errors
        }
      }

  return (
    <div>
      <h1 className="h1signup">Create Your Account</h1>
      {signInState.errors.email && (
        <p style={{ color: "red", textAlign: "center" }}>
          {signInState.errors.email}
        </p>
      )}

      {signInState.errors.password && (
        <p style={{ color: "red", textAlign: "center" }}>
          {signInState.errors.password}
        </p>
      )}

      <form className="formSinup" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Enter your emaill address
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={signInState.email}
          />
        </label>

        <label htmlFor="password">
          Enter your password
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={signInState.password}
          />
        </label>

        <label htmlFor="name">
          First name
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={signInState.name}
          />
        </label>

        <label htmlFor="lastname">
          Last name
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            value={signInState.lastname}
          />
        </label>

        <button>Sign UP</button>

        <p>
          By clicking Create account, I agree that I have read and accepted the{" "}
          <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.
        </p>

        <h4>or use account</h4>

        <button>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3_343)">
              <path
                d="M6.42701 17.525L5.41756 21.2934L1.72805 21.3715C0.625426 19.3264 0 16.9865 0 14.5C0 12.0955 0.584758 9.82807 1.62128 7.83154H1.62207L4.90678 8.43375L6.34568 11.6987C6.04452 12.5767 5.88037 13.5192 5.88037 14.5C5.88049 15.5643 6.07329 16.5842 6.42701 17.525Z"
                fill="#FBBB00"
              />
              <path
                d="M28.7467 11.7913C28.9132 12.6684 29 13.5742 29 14.5C29 15.5381 28.8909 16.5508 28.683 17.5275C27.9771 20.8514 26.1327 23.7538 23.5777 25.8077L23.5769 25.8069L19.4397 25.5958L18.8541 21.9405C20.5495 20.9462 21.8744 19.3902 22.5724 17.5275H14.8188V11.7913H22.6855H28.7467Z"
                fill="#518EF8"
              />
              <path
                d="M23.5768 25.8069L23.5776 25.8076C21.0927 27.805 17.9361 29 14.4999 29C8.978 29 4.17708 25.9136 1.728 21.3716L6.42696 17.5251C7.65147 20.7932 10.804 23.1196 14.4999 23.1196C16.0885 23.1196 17.5768 22.6901 18.8539 21.9405L23.5768 25.8069Z"
                fill="#28B446"
              />
              <path
                d="M23.7553 3.33817L19.0579 7.18384C17.7362 6.35768 16.1738 5.88043 14.5 5.88043C10.7204 5.88043 7.5089 8.31354 6.34573 11.6988L1.62207 7.83159H1.62128C4.03451 3.17884 8.89597 0 14.5 0C18.0182 0 21.2441 1.25323 23.7553 3.33817Z"
                fill="#F14336"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_343">
                <rect width="29" height="29" fill="white" />
              </clipPath>
            </defs>
          </svg>
          GOOGLE
        </button>
      </form>
    </div>
  );

};

export default SignIn
