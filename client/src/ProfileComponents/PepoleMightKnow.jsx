import React, { useState } from 'react'
import './PepoleMightKnow.css';

function PeopleMightKnow() {
    const [people, setPeople] = useState([
        {
            avatarImageUrl: "",
            firstName: "Eddie",
            lastName: "Lobanovskiy",
            email: "laboanovskiy@gmail.com"
        }, {
            avatarImageUrl: "",
            firstName: "Alexey",
            lastName: "Stave",
            email: "alexeyst@gmail.com"
        }, {
            avatarImageUrl: "",
            firstName: "Antonn",
            lastName: "Tkacheve",
            email: "tkacheveanton@gmail.com"
        }
    ])

    return (
        <div className="people-might-know">
            <h2>You Might Know</h2>
            <ul>
                {people.map((element, index) => {
                    return (
                        <li key={index}>
                            <img src={element.avatarImageUrl} alt="img" />
                            <h3>{element.firstName} {element.lastName}</h3>
                            <p>{element.email}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PeopleMightKnow