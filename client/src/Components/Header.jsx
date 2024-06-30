import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="main">
        <Link to={'/'}>
            <h1 className="header">BLOG PAGE</h1>
        </Link> 

          {!props.isLoggedIn ?
          <>
            <img style={{ width:'50px',height:'50px', borderRadius:"30px"}} src="https://via.placeholder.com/50" alt="user photo" />
            <p> &nbsp;musab alsayed</p> 
          </>
          :
            <div className='links'>
              <Link to={"/LogInPage"}>LogIn</Link>
              <Link to={"/SignInPage"}>SignIn</Link>
              <Link to={"/EditProfile"}>EditProfile</Link>
            </div >}
          

    </div>
  )
}

export default Header