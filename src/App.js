import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Favorite />} path="/favorite" />
      </Routes>
    </Router>
  );
}

export default App;
