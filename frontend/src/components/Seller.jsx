import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import "./Seller.css";

const Seller = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <motion.div
      className="seller-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.button
        className="back-btn"
        onClick={() => navigate("/home")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ⬅ Back
      </motion.button>

      <motion.h1
        className="seller-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Sell Your Product
      </motion.h1>

      <label className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <FaPlus className="plus-icon" />
        )}
      </label>

      <motion.input
        type="text"
        placeholder="Description of the product"
        className="input-field"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      />

      <motion.input
        type="number"
        placeholder="Price"
        className="input-field"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      />

      <motion.input
        type="text"
        placeholder="Contact Information"
        className="input-field"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      />

      <motion.button
        className="submit-btn"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        Submit
      </motion.button>
    </motion.div>
  );
};

export default Seller;
