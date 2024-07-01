import React, { useState } from 'react'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

function Banner() {

  const [data , setData ] = useState({
    firstName:"Charles",
    lastName:"Doe",
    bannerImageUrl:"",
    AvatarImageUrl:"",
    bio:"Bio",
  })


  return (
    <>
      <div>
          <img src="" alt="" />
            <Link>Edit Covor Photo</Link>
      </div>

      <div>
        <h2>{data.firstName} {data.lastName}</h2>
          <p>{data.bio}</p>
            <Link>Edit Profile</Link>
      </div>
    </>
  )
}

export default Banner