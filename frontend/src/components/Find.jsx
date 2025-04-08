import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Find.css";

const Find = () => {
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
      className="find-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back Button */}
      <motion.button
        className="back-btn"
        onClick={() => navigate("/home")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ⬅ Back
      </motion.button>

      <h1 className="title">Report Found Item</h1>

      {/* Image Upload Section */}
      <label htmlFor="upload-input" className="upload-btn">
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <span className="plus-icon">+</span>
        )}
      </label>
      <input
        type="file"
        id="upload-input"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />

      {/* Input Fields */}
      <input type="text" className="input-field" placeholder="Description of the item" />
      <input type="text" className="input-field" placeholder="Location found" />
      <input type="text" className="input-field" placeholder="Your contact information" />

      {/* Submit Button */}
      <motion.button
        className="submit-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Report Item
      </motion.button>
    </motion.div>
  );
};

export default Find;
