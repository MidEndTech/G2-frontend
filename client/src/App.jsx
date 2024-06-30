import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/Header";
import LogInPage from "./Pages/LogInPage";
import SignInPage from "./Pages/SignInPage";
import EditProfile from "./Pages/EditProfile";

function App() {
  const isLoggedIn = true; // this variable for chick the user it's log in or not

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
