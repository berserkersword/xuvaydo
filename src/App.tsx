import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUP />} />
      </Routes>
    </div>
  );
}

export default App;
