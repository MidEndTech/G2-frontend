import {BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LogInPage from "./Pages/LogInPage";
import SignInPage from "./Pages/SignInPage";

import EditProfile from "./Pages/EditProfile";
import ProfilePage from "./Pages/ProfilePage";
import HomePage from "./Pages/HomePage";
import Home from "./Home";
import Leaderbords from "./Pages/Leaderbords";



function App() {


  const isLoggedIn = true ; // this variable for chick the user it's log in or not 

  

  return (
    <>
     <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
        <Route path="/Leaderbords" element={<Leaderbords/>}/>
      </Routes>
      
    </>
  );
}

export default App;
