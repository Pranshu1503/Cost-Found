import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sell-item-page.css"; // Reuse the SellItemPage CSS for consistent styling

const PostLostItemPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    contactInfo: "",
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lost item submitted:", formData);
    // Add API call to submit the lost item
    navigate("/lost-found");
  };

  return (
    <div className="sell-item-page">
      <h1>Report a Lost Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Item Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Item Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Last Seen Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Information"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostLostItemPage;