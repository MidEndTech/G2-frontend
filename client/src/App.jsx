import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/Header";
import LogInPage from "./Pages/LogInPage";
import SignInPage from "./Pages/SignInPage";

import EditProfile from "./Pages/EditProfile";
import ProfilePage from "./Pages/ProfilePage";

function App() {


  const isLoggedIn = false ; // this variable for chick the user it's log in or not 

  

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />

        <Route path="/EditProfile" element={<EditProfile />} />

        <Route path="/ProfilePage" element={<ProfilePage/>}/>
      </Routes>
    </>
  );
}

export default App;
