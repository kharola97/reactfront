import Home from "./Component/Home";
import Nav from "./Component/Nav"
import About from "./Component/About";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <Router>
        <Nav/>
        <Routes>
      <Route path="/" element={<Home/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
