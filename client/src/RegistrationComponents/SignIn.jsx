// (c)Musab Alsayed / MID-END

import React from 'react'

function SignIn() {

//************ i will use this functions leaters ************************************************************************

 //here put a initial value for inputs
//  const initState = {
//     Email:"",
//     Password:"",
// }

// //This function for reduc the inputs to variable called state
// const reducer = (state,action) => {
//     switch(action.type){
//         case "input":
//             return {...state,[action.field] : action.value};
//         default:
//             return state;
//     }
// }

// const [state , dispatch] = useReducer(reducer, initState)

// //for we can write the input from user
// const handleChange = (e) =>{
//     dispatch({
//         type:'input',
//         field: e.target.name,
//         value: e.target.value,
//     })
// }

// //the finale function whene submit and atake the variable for back end
// const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(state) // this state has informtions of log in 

//     //aftar submit open console for check the use informtions
// }

//************ i will use this functions leaters ************************************************************************



//Todo:take the info eith the taems;
return (
        <div>
            <h1>SignIn</h1>
                <form >
                    <label htmlFor="Email">
                            Email:
                        <input type="email" name="Email" id="Email" />
                    </label>

                    <label htmlFor="Password">
                            Password
                        <input type="password" name="Password" id="Password" />
                    </label>

                    <button>Login</button>
                </form>
        </div>
)
}

export default SignIn