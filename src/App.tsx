import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CesiumMap from "./pages/CesiumMap";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<CesiumMap />} />
      </Routes>
    </Router>
  );
}

export default App;

