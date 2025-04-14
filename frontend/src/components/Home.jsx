import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.button
        className="back-btn"
        onClick={() => navigate("/")}  // Navigates to Welcome page
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ⬅ Back
      </motion.button>

      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        COST & FOUND
      </motion.h1>

    
      <div className="options">
      <button className="option-btn" onClick={() => navigate("/sell")}>SELLER</button>
      <button className="option-btn" onClick={() => navigate("/buy")}>BUYER</button>
      <button className="option-btn" onClick={() => navigate("/find")}>FINDER</button>
      <button className="option-btn" onClick={() => navigate("/lose")}>LOSER</button>

      </div>
    </motion.div>
  );
  
};
export default Home;
