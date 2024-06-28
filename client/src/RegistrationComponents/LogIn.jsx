// (c)Musab Alsayed / MID-END

import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

function LogIn() {

    //here put a initial value for inputs
    const initState = {
        Email:"",
        Password:"",
    }

    //This function for reduc the inputs to variable called state
    const reducer = (state,action) => {
        switch(action.type){
            case "input":
                return {...state,[action.field] : action.value};
            default:
                return state;
        }
    }

    const [state , dispatch] = useReducer(reducer, initState)

    //for we can write the input from user
    const handleChange = (e) =>{
        dispatch({
            type:'input',
            field: e.target.name,
            value: e.target.value,
        })
    }

    //the finale function whene submit and atake the variable for back end
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state) // this state has informtions of log in 

        //aftar submit open console for check the use informtions
    }

  return (
    <div>
        <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">
                        Email:
                    <input type="email" name="Email" id="Email" value={state.Email} onChange={handleChange}/>
                </label>

                <label htmlFor="Password">
                        Password
                    <input type="password" name="Password" id="Password" value={state.Password}  onChange={handleChange}/>
                </label>

                <button>Login</button>
            </form>

                <p>Not a member?<Link to={'/SignInPage'}>SignIn</Link></p>
    </div>
  )
}

export default LogIn