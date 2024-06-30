import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="main">
        <Link to={'/'}>
            <h1 className="header">BLOG PAGE</h1>
        </Link> 

          {props.isLoggedIn ?
          <Link to={"/ProfilePage"}>
            <img style={{ width:'50px',height:'50px', borderRadius:"30px"}} src="https://via.placeholder.com/50" alt="user photo" />
            <p style={{color:"green"}}> &nbsp;musab alsayed</p> 
          </Link>
          :
            <>
              <Link to={"/LogInPage"}>LogIn</Link>
              <Link to={"/SignInPage"}>SignIn</Link>
            </>}
          

    </div>
  )
}

export default Header