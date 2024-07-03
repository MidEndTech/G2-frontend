import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LogInPage from "./Pages/LogInPage";
import SignInPage from "./Pages/SignInPage";
import EditProfile from "./Pages/EditProfile";
import ProfilePage from "./Pages/ProfilePage";
import HomePage from "./Pages/HomePage";
import Leaderbords from "./Pages/Leaderbords";
import BlogVe from "./Pages/BlogVe";
import MostReader from "./Pages/MostReader";
import { useEffect } from "react";

function App() {

  // const isLoggedIn = false; // this variable for chick the user it's log in or not

  
  useEffect(()=>{
    
  },)

  return (
    <>

      <Header/>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/BlogVe" element={<BlogVe />} />
        <Route path="/MostReader" element={<MostReader />} />

        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/Leaderbords" element={<Leaderbords />} />
      </Routes>
    </>
  );
}

export default App;