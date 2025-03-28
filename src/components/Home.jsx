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
      transition={{ duration: 3 }}
    >
      <motion.button
        className="back-btn"
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ⬅
      </motion.button>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        COST & FOUND
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        YOU ARE A
      </motion.p>

      <div className="options">
        {["seller", "buyer", "finder", "loser"].map((route, index) => (
          <motion.button
            key={route}
            className="option-btn"
            onClick={() => navigate(`/${route}`)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3 + index * 0.2, type: "spring", stiffness: 100 }}
          >
            {route.toUpperCase()}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
