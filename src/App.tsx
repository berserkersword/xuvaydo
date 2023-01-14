import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";
 import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import { UserCredential } from "firebase/auth";

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState<UserCredential>()

  useEffect(() => {
    console.log(isAuth);
    console.log(user?.user.email);
    
  }, [setIsAuth])
  

  return (
    <div>
      <Navbar isAuth={isAuth} user={user} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login  setUser={setUser} setIsAuth={setIsAuth} isAuth={isAuth} />} />
        <Route path="signup" element={<SignUP />} />
      </Routes>
    </div>
  );
}

export default App;
