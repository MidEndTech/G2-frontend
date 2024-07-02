import { Link } from 'react-router-dom';
import  "./header.css";




function Header(props) {
  return (
    <div className='buttons'>
    <div className="main">

        <img src="src\assets\logoblog.jpg" alt="logo" style={{ width: '55px', height: 'auto' }}/>
            <h1 className="header"></h1>



          {props.isLoggedIn ?
          <Link to={"/ProfilePage"}>
            <img style={{ width:'50px',height:'50px', borderRadius:"30px"}} src="https://via.placeholder.com/50" alt="user photo" />
            <p style={{color:"green"}}> &nbsp;musab alsayed</p> 
          </Link>
          :
            <>
              <ul> 
             <li><Link to={"/HomePage"}>Home</Link></li>
             <li> <Link to={"/"}>Trend of Readers</Link></li>
             <li><Link to={"/Leaderbords"}>Trend of likes</Link></li>
             <li> <Link to={"/Home"}>Bloges</Link></li>
             <button className='btn1'> <Link to={"/LogInPage"}>Login</Link></button>
             <button className='btn2'> <Link to={"/SignInPage"}>SignUp</Link></button>
              </ul>



            </>}

            </div>
    </div>

  )
}

export default Header;
