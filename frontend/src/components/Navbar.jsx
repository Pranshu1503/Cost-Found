"use client"

import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import "../styles/navbar.css"

const Navbar = () => {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    setUser(null)
    // In a real app, you would also clear tokens, cookies, etc.
    navigate("/")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Cost&Found
        </Link>

        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/lost-found" onClick={() => setMobileMenuOpen(false)}>
              Lost & Found
            </Link>
          </li>
          <li>
            <Link to="/marketplace" onClick={() => setMobileMenuOpen(false)}>
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="/rentals" onClick={() => setMobileMenuOpen(false)}>
              Rentals
            </Link>
          </li>
        </ul>

        <div className={`auth-links ${mobileMenuOpen ? "active" : ""}`}>
          {user ? (
            <>
              <Link to="/profile" className="profile-link" onClick={() => setMobileMenuOpen(false)}>
                {user.name}
              </Link>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-link" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="register-link" onClick={() => setMobileMenuOpen(false)}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
