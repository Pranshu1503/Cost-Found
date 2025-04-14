"use client"

import { useState } from "react"
import ItemCard from "../components/ItemCard"
import "../styles/rental-page.css"

const RentalPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock data for development
  const mockItems = [
    {
      id: "1",
      title: "Mountain Bike",
      description:
        "High-quality mountain bike available for daily or weekly rental. Perfect for exploring trails or city commuting.",
      date: "2023-06-15T14:30:00Z",
      price: 25,
      category: "bikes",
      availableFrom: "2023-07-01",
      availableTo: "2023-08-30",
      image: "/photos/bike.jpg",
    },
    {
      id: "2",
      title: "DSLR Camera",
      description:
        "Canon EOS 5D Mark IV with 24-70mm lens. Perfect for photography enthusiasts or special events. Includes memory card and extra battery.",
      date: "2023-06-17T09:15:00Z",
      price: 50,
      category: "electronics",
      availableFrom: "2023-06-25",
      availableTo: "2023-09-15",
      image: "/photos/dslr.jpg",
    },
    {
      id: "3",
      title: "Camping Tent (4-Person)",
      description: "Spacious 4-person camping tent, waterproof and easy to set up. Includes stakes and carrying bag.",
      date: "2023-06-16T18:45:00Z",
      price: 30,
      category: "outdoors",
      availableFrom: "2023-07-05",
      availableTo: "2023-08-20",
      image: "/photos/tent.avif",
    },
    {
      id: "4",
      title: "Folding Table and Chairs",
      description:
        "Folding table with 4 chairs, perfect for parties, events, or temporary use. Easy to transport and store.",
      date: "2023-06-18T11:20:00Z",
      price: 15,
      category: "furniture",
      availableFrom: "2023-06-20",
      availableTo: "2023-12-31",
      image: "/photos/folding.jpg",
    },
  ]

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "bikes", name: "Bikes & Scooters" },
    { id: "electronics", name: "Electronics" },
    { id: "furniture", name: "Furniture" },
    { id: "tools", name: "Tools & Equipment" },
    { id: "outdoors", name: "Outdoor Gear" },
    { id: "party", name: "Party Supplies" },
    { id: "other", name: "Other" },
  ]

  // Filter items based on search term and category
  const filteredItems = mockItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="rental-page">
      <div className="page-header">
        <h1>Rentals</h1>
        <p>Rent bikes, furniture, and other essential items.</p>
      </div>

      <div className="rental-layout">
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
            <h3>Availability</h3>
            <div className="date-inputs">
              <div className="date-field">
                <label>From</label>
                <input type="date" />
              </div>
              <div className="date-field">
                <label>To</label>
                <input type="date" />
              </div>
            </div>
          </div>
        </aside>

        <div className="rental-content">
          <div className="actions-bar">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search rentals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="post-button">List for Rent</button>
          </div>

          <div className="rental-info-banner">
            <h3>How Rentals Work</h3>
            <p>
              Browse items available for rent, contact the owner, and arrange pickup/return. Payment is handled directly
              between parties.
            </p>
          </div>

          <div className="items-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => <ItemCard key={item.id} item={item} type="rental" />)
            ) : (
              <div className="no-items">
                <p>No rental items found. Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentalPage
