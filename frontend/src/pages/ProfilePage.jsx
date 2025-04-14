"use client"

import { useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import "../styles/profile-page.css"

const ProfilePage = () => {
  const { user } = useContext(UserContext)

  const [activeTab, setActiveTab] = useState("listings")

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />
  }

  // Mock data for development
  const mockListings = [
    {
      id: "1",
      title: "Lost Black Wallet",
      type: "lost",
      date: "2023-06-15T14:30:00Z",
      status: "active",
    },
    {
      id: "2",
      title: "Vintage Leather Sofa",
      type: "sale",
      price: 450,
      date: "2023-06-10T09:15:00Z",
      status: "active",
    },
    {
      id: "3",
      title: "Mountain Bike",
      type: "rental",
      price: 25,
      date: "2023-05-20T18:45:00Z",
      status: "inactive",
    },
  ]

  const mockMessages = [
    {
      id: "1",
      from: "Jane Smith",
      subject: "Regarding your lost wallet",
      date: "2023-06-16T10:30:00Z",
      read: true,
    },
    {
      id: "2",
      from: "Mike Johnson",
      subject: "Interested in your sofa",
      date: "2023-06-15T14:20:00Z",
      read: false,
    },
    {
      id: "3",
      from: "Sarah Williams",
      subject: "Mountain bike rental inquiry",
      date: "2023-06-14T09:45:00Z",
      read: true,
    },
  ]

  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Get badge text and class based on item type
  const getItemBadge = (type) => {
    switch (type) {
      case "lost":
        return { text: "Lost", className: "badge-lost" }
      case "found":
        return { text: "Found", className: "badge-found" }
      case "sale":
        return { text: "For Sale", className: "badge-sale" }
      case "rental":
        return { text: "For Rent", className: "badge-rental" }
      default:
        return { text: "", className: "" }
    }
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar">{user.name.charAt(0)}</div>
          <div className="profile-details">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p className="member-since">Member since {formatDate("2023-01-15T00:00:00Z")}</p>
          </div>
        </div>
        <button className="edit-profile-button">Edit Profile</button>
      </div>

      <div className="profile-tabs">
        <button
          className={`profile-tab ${activeTab === "listings" ? "active" : ""}`}
          onClick={() => setActiveTab("listings")}
        >
          My Listings
        </button>
        <button
          className={`profile-tab ${activeTab === "messages" ? "active" : ""}`}
          onClick={() => setActiveTab("messages")}
        >
          Messages
        </button>
        <button
          className={`profile-tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          Account Settings
        </button>
      </div>

      <div className="profile-content">
        {activeTab === "listings" && (
          <div className="listings-section">
            <div className="section-header">
              <h2>My Listings</h2>
              <button className="new-listing-button">Create New Listing</button>
            </div>

            {mockListings.length > 0 ? (
              <div className="listings-table">
                <div className="table-header">
                  <div className="table-cell">Title</div>
                  <div className="table-cell">Type</div>
                  <div className="table-cell">Date</div>
                  <div className="table-cell">Status</div>
                  <div className="table-cell">Actions</div>
                </div>

                {mockListings.map((listing) => {
                  const badge = getItemBadge(listing.type)
                  return (
                    <div key={listing.id} className="table-row">
                      <div className="table-cell title-cell">{listing.title}</div>
                      <div className="table-cell">
                        <span className={`item-badge ${badge.className}`}>{badge.text}</span>
                      </div>
                      <div className="table-cell">{formatDate(listing.date)}</div>
                      <div className="table-cell">
                        <span
                          className={`status-badge ${listing.status === "active" ? "status-active" : "status-inactive"}`}
                        >
                          {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                        </span>
                      </div>
                      <div className="table-cell actions-cell">
                        <button className="action-button edit">Edit</button>
                        <button className="action-button delete">Delete</button>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="empty-state">
                <p>You don't have any listings yet.</p>
                <button className="create-listing-button">Create Your First Listing</button>
              </div>
            )}
          </div>
        )}

        {activeTab === "messages" && (
          <div className="messages-section">
            <h2>Messages</h2>

            {mockMessages.length > 0 ? (
              <div className="messages-list">
                {mockMessages.map((message) => (
                  <div key={message.id} className={`message-item ${!message.read ? "unread" : ""}`}>
                    <div className="message-sender">{message.from}</div>
                    <div className="message-subject">{message.subject}</div>
                    <div className="message-date">{formatDate(message.date)}</div>
                    <div className="message-actions">
                      <button className="action-button view">View</button>
                      <button className="action-button delete">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>You don't have any messages yet.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="settings-section">
            <h2>Account Settings</h2>

            <div className="settings-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" defaultValue={user.name} />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue={user.email} />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Add your phone number" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" value="********" readOnly />
                <button className="change-password-button">Change Password</button>
              </div>

              <div className="form-group">
                <label>Notification Preferences</label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input type="checkbox" id="emailNotifications" defaultChecked />
                    <label htmlFor="emailNotifications">Email Notifications</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="smsNotifications" />
                    <label htmlFor="smsNotifications">SMS Notifications</label>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button className="save-settings-button">Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
