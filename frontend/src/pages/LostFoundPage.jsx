"use client"

import { useState } from "react"
import ItemCard from "../components/ItemCard"
import "../styles/lost-found-page.css"

const LostFoundPage = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for development
  const mockItems = [
    {
      id: "1",
      title: "Lost Black Wallet",
      description:
        "I lost my black leather wallet near Central Park on Saturday afternoon. It contains my ID, credit cards, and some cash. If found, please contact me.",
      date: "2023-06-15T14:30:00Z",
      location: "Central Park, New York",
      type: "lost",
      category: "personal",
      image: "/photos/wallet.avif",
    },
    {
      id: "2",
      title: "Found iPhone 13",
      description:
        "Found an iPhone 13 Pro in a blue case at the Main Street Coffee Shop. The phone is locked. Please describe it in detail to claim.",
      date: "2023-06-17T09:15:00Z",
      location: "Main Street Coffee Shop",
      type: "found",
      category: "electronics",
      image: "/photos/iphone13.jpg",
    },
    {
      id: "3",
      title: "Lost Car Keys",
      description: "Lost my Toyota car keys with a red keychain at the shopping mall. Last seen near the food court.",
      date: "2023-06-16T18:45:00Z",
      location: "City Center Mall",
      type: "lost",
      category: "personal",
      image: "/photos/carkeys.jpg",
    },
    {
      id: "4",
      title: "Found Glasses",
      description:
        "Found a pair of prescription glasses with black frames at the public library. They were left on a table in the reading area.",
      date: "2023-06-18T11:20:00Z",
      location: "Public Library",
      type: "found",
      category: "personal",
      image: "/photos/blackframes.webp",
    },
  ]

  // Filter items based on active tab and search term
  const filteredItems = mockItems.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="lost-found-page">
      <div className="page-header">
        <h1>Lost & Found</h1>
        <p>Report lost items or help others find their belongings.</p>
      </div>

      <div className="actions-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="post-button">Post New Item</button>
      </div>

      <div className="tabs">
        <button className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
          All Items
        </button>
        <button className={`tab ${activeTab === "lost" ? "active" : ""}`} onClick={() => setActiveTab("lost")}>
          Lost Items
        </button>
        <button className={`tab ${activeTab === "found" ? "active" : ""}`} onClick={() => setActiveTab("found")}>
          Found Items
        </button>
      </div>

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ItemCard key={item.id} item={item} type={item.type} />)
        ) : (
          <div className="no-items">
            <p>No items found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LostFoundPage
