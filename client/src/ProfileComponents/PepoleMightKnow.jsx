import React, { useState } from 'react'

function PepoleMightKnow() {


    
    const [pepole , setPepole] = useState([
                                            {
                                                avatarImageUrl:"",
                                                firstName:"Eddie",
                                                lastName:"Lobanovskiy",
                                                email:"laboanovskiy@gmail.com"
                                            },{
                                                avatarImageUrl:"",
                                                firstName:"Alexey",
                                                lastName:"Stave",
                                                email:"alexeyst@gmail.com"
                                            },{
                                                avatarImageUrl:"",
                                                firstName:"Antonn",
                                                lastName:"Tkacheve",
                                                email:"tkacheveanton@gmail.com"
                                            }
                                        ])

  return (
    <div style={{border:"2px solid"}}>
        <h2>you might Know</h2>
            <ul>
                {pepole.map((element,index) => {
                    return <li key={index}>
                        <img src={element.avatarImageUrl} alt="img"/>
                            <h3>{element.firstName} {element.lastName}</h3>
                                <p>{element.email}</p>
                    </li>
                })}
            </ul>
    </div>
  )
}

export default PepoleMightKnow 