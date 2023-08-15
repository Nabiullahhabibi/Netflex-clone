import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const user = true;
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Register />}/>
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      {user && (
        <>
      <Route path="/series" element={<Home type="series" />} />
      <Route path="/movies" element={<Home type="movies"/>} />
      <Route path="/watch" element={ <Watch />} />
      </>
      )}
    </Routes>
  </Router>
    
  )
};

export default App;