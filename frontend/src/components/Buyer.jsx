import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Buyer.css";

const Buyer = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 500, category: "Electronics", image: "/laptop.jpg" },
    { id: 2, name: "Book", price: 10, category: "Books", image: "/book.jpg" },
    { id: 3, name: "Chair", price: 30, category: "Furniture", image: "/chair.jpg" }
  ];

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (maxPrice === "" || product.price <= parseInt(maxPrice)) &&
      (category === "" || product.category === category)
    );
  });

  return (
    <motion.div
      className="buyer-container"
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

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Browse Products
      </motion.h1>

      {/* Search & Filter Section */}
      <motion.div
        className="filters"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <input
          type="text"
          placeholder="Search items..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="price-filter"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <select
          className="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Furniture">Furniture</option>
        </select>
      </motion.div>

      {/* Product Listing */}
      <motion.div
        className="product-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Buyer;
