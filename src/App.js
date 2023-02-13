import Header from "./components/Header";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
      <Router>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element={<Homepage/>}/>
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
  );
}

export default App;
