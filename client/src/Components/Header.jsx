import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="main">
        <Link to={'/'}>
            <h1 className="header">BLOG PAGE</h1>
        </Link>
        
            <Link to={"/LogInPage"}>LogIn</Link>
            <Link to={"/SignInPage"}>SignIn</Link>
    </div>
  )
}

export default Header