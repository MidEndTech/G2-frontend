import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/Header";
import LogInPage from "./Pages/LogInPage";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
