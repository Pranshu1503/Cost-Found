import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import "./Lost.css";

const Lost = () => {
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
      className="lost-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/home")}>⬅ Back</button>

      <h1 className="lost-title">Report Lost Item</h1>

      {/* Image Upload */}
      <div className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <FaPlus className="plus-icon" />
        )}
      </div>

      {/* Input Fields */}
      <input type="text" className="input-field" placeholder="Description of the lost item" />
      <input type="text" className="input-field" placeholder="Location where it was lost" />
      <input type="text" className="input-field" placeholder="Your contact information" />

      {/* Submit Button */}
      <button className="submit-btn">Submit</button>
    </motion.div>
  );
};

export default Lost;
