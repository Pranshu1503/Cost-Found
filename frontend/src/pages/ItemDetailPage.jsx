"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "../styles/item-detail-page.css"

const ItemDetailPage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Mock data for development
  const mockItems = {
    1: {
      id: "1",
      title: "Lost Black Wallet",
      description:
        "I lost my black leather wallet near Central Park on Saturday afternoon. It contains my ID, credit cards, and some cash. If found, please contact me.",
      date: "2023-06-15T14:30:00Z",
      location: "Central Park, New York",
      type: "lost",
      category: "personal",
      image: "/photos/wallet.avif",
      user: {
        id: "user1",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(123) 456-7890",
        joinDate: "2023-01-15T00:00:00Z",
      },
    },
    2: {
      id: "2",
      title: "Vintage Leather Sofa",
      description:
        "Beautiful vintage leather sofa in excellent condition. Perfect for a living room or office. Minor wear consistent with age. The sofa is approximately 7 feet long and 3 feet deep. The leather is a rich brown color that has developed a beautiful patina over time. The legs are solid wood with a dark walnut finish. This piece would be a great addition to any home with a mid-century or vintage aesthetic.",
      date: "2023-06-15T14:30:00Z",
      price: 450,
      category: "furniture",
      condition: "good",
      image: "/photos/sofa.jpg",
      user: {
        id: "user2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "(234) 567-8901",
        joinDate: "2023-02-20T00:00:00Z",
      },
    },
    3: {
      id: "3",
      title: "Mountain Bike",
      description:
        "High-quality mountain bike available for daily or weekly rental. Perfect for exploring trails or city commuting. This is a Trek Marlin 7 with 29-inch wheels, hydraulic disc brakes, and a lightweight aluminum frame. The bike has been well-maintained and is in excellent condition. It comes with a helmet and bike lock for your convenience.",
      date: "2023-06-15T14:30:00Z",
      price: 25,
      category: "bikes",
      availableFrom: "2023-07-01",
      availableTo: "2023-08-30",
      image: "/photos/bike.jpg",
      type: "rental",
      user: {
        id: "user3",
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
        phone: "(345) 678-9012",
        joinDate: "2023-03-10T00:00:00Z",
      },
    },
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      if (mockItems[id]) {
        setItem(mockItems[id])
        setLoading(false)
      } else {
        setError("Item not found")
        setLoading(false)
      }
    }, 500)
  }, [id])

  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Determine the badge text and class based on item type
  const getBadgeInfo = (item) => {
    if (!item) return { text: "", className: "" }

    if (item.type === "lost") return { text: "Lost", className: "badge-lost" }
    if (item.type === "found") return { text: "Found", className: "badge-found" }
    if (item.type === "rental") return { text: "For Rent", className: "badge-rental" }
    return { text: "For Sale", className: "badge-sale" }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading item details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    )
  }

  const badgeInfo = getBadgeInfo(item)

  return (
    <div className="item-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> {" > "}
        {item.type === "lost" || item.type === "found" ? (
          <Link to="/lost-found">Lost & Found</Link>
        ) : item.type === "rental" ? (
          <Link to="/rentals">Rentals</Link>
        ) : (
          <Link to="/marketplace">Marketplace</Link>
        )}
        {" > "} {item.title}
      </div>

      <div className="item-detail-container">
        <div className="item-image-container">
          <span className={`item-badge ${badgeInfo.className}`}>{badgeInfo.text}</span>
          <img src={item.image || `/placeholder.svg?height=400&width=600`} alt={item.title} className="item-image" />
        </div>

        <div className="item-info">
          <h1 className="item-title">{item.title}</h1>

          <div className="item-meta">
            <p className="item-date">Posted on {formatDate(item.date)}</p>

            {(item.type === "lost" || item.type === "found") && (
              <p className="item-location">
                <strong>Location:</strong> {item.location}
              </p>
            )}

            {item.price !== undefined && (
              <p className="item-price">
                <strong>Price:</strong> ${item.price}
                {item.type === "rental" ? "/day" : ""}
              </p>
            )}

            {item.category && (
              <p className="item-category">
                <strong>Category:</strong> {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </p>
            )}

            {item.condition && (
              <p className="item-condition">
                <strong>Condition:</strong> {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
              </p>
            )}

            {item.availableFrom && item.availableTo && (
              <p className="item-availability">
                <strong>Available:</strong> {formatDate(item.availableFrom)} to {formatDate(item.availableTo)}
              </p>
            )}
          </div>

          <div className="item-description">
            <h2>Description</h2>
            <p>{item.description}</p>
          </div>

          <div className="contact-section">
            <h2>Contact Information</h2>
            <div className="user-info">
              <p>
                <strong>Name:</strong> {item.user.name}
              </p>
              <p>
                <strong>Email:</strong> {item.user.email}
              </p>
              <p>
                <strong>Phone:</strong> {item.user.phone}
              </p>
              <p>
                <strong>Member since:</strong> {formatDate(item.user.joinDate)}
              </p>
            </div>

            <div className="contact-buttons">
              <button className="contact-button primary">Send Message</button>

              {item.type === "rental" && <button className="contact-button secondary">Request Rental</button>}

              {item.type !== "lost" && item.type !== "found" && item.type !== "rental" && (
                <button className="contact-button secondary">Make Offer</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailPage
