import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Welcome.css"; // Ensure this file is updated

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <motion.div
      className="welcome-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        <img src="/logo.png" alt="Logo" className="logo" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Welcome to <span className="highlight">Cost & Found</span>
      </motion.h1>

      <motion.button
        onClick={handleGetStarted}
        className="start-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started →
      </motion.button>
      
    </motion.div>
  );
};

export default Welcome;
