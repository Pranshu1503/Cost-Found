"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom" // Add this import
import ItemCard from "../components/ItemCard"
import "../styles/marketplace-page.css"

const MarketplacePage = () => {
  const navigate = useNavigate() // Add this hook
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })

  // Mock data for development
  const mockItems = [
    {
      id: "1",
      title: "Vintage Leather Sofa",
      description:
        "Beautiful vintage leather sofa in excellent condition. Perfect for a living room or office. Minor wear consistent with age.",
      date: "2023-06-15T14:30:00Z",
      price: 450,
      category: "furniture",
      condition: "good",
      image: "/photos/sofa.jpg",
    },
    {
      id: "2",
      title: "MacBook Pro 2021",
      description:
        "MacBook Pro 2021 model with M1 chip, 16GB RAM, and 512GB SSD. Includes charger and original box. Minor scratches on the bottom.",
      date: "2023-06-17T09:15:00Z",
      price: 1200,
      category: "electronics",
      condition: "excellent",
      image: "/photos/mac.jpeg",
    },
    {
      id: "3",
      title: "Mountain Bike",
      description:
        "Trek mountain bike in good condition. 21 speeds, recently tuned up with new brakes and tires. Great for trails or commuting.",
      date: "2023-06-16T18:45:00Z",
      price: 350,
      category: "sports",
      condition: "good",
      image: "/photos/bike.jpg",
    },
    {
      id: "4",
      title: "Antique Wooden Desk",
      description:
        "Beautiful antique wooden desk from the early 1900s. Solid oak with original hardware. Some patina consistent with age.",
      date: "2023-06-18T11:20:00Z",
      price: 600,
      category: "furniture",
      condition: "fair",
      image: "/photos/desk.jpg",
    },
    {
      id: "5",
      title: "Blue water bottle",
      description: "Milton.",
      date: new Date().toISOString(),
      price: 100,
      category: "other",
      image: "/photos/image.png",
    },
  ]

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "furniture", name: "Furniture" },
    { id: "electronics", name: "Electronics" },
    { id: "clothing", name: "Clothing" },
    { id: "books", name: "Books" },
    { id: "sports", name: "Sports & Outdoors" },
    { id: "home", name: "Home & Kitchen" },
    { id: "toys", name: "Toys & Games" },
    { id: "other", name: "Other" },
  ]

  // Filter items based on search term, category, and price range
  const filteredItems = mockItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesMinPrice = priceRange.min === "" || item.price >= Number(priceRange.min)
    const matchesMaxPrice = priceRange.max === "" || item.price <= Number(priceRange.max)

    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice
  })

  return (
    <div className="marketplace-page">
      <div className="page-header">
        <h1>Marketplace</h1>
        <p>Buy and sell second-hand goods at affordable prices.</p>
      </div>

      <div className="marketplace-layout">
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={selectedCategory === category.id ? "active" : ""}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              />
              <span>to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              />
            </div>
            <button
              className="apply-filters"
              onClick={() => {
                /* Apply filters logic */
              }}
            >
              Apply Filters
            </button>
          </div>
        </aside>

        <div className="marketplace-content">
          <div className="actions-bar">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search marketplace..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="post-button" onClick={() => navigate("/sell-item")}>
              Sell an Item
            </button>
          </div>

          <div className="items-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => <ItemCard key={item.id} item={item} type="sale" />)
            ) : (
              <div className="no-items">
                <p>No items found. Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketplacePage
