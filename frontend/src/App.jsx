import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Seller from "./components/Seller";
import Buyer from "./components/Buyer";
import Lost from "./components/Lost";
import Find from "./components/Find"; 
import Footer from "./components/Footer"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sell" element={<Seller />} />
        <Route path="/buy" element={<Buyer />} />
        <Route path="/lose" element={<Lost />} />
        <Route path="/find" element={<Find />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
