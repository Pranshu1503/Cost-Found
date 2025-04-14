"use client"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import LostFoundPage from "./pages/LostFoundPage"
import MarketplacePage from "./pages/MarketplacePage"
import RentalPage from "./pages/RentalPage"
import ItemDetailPage from "./pages/ItemDetailPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { UserContext } from "./context/UserContext"

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lost-found" element={<LostFoundPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/rentals" element={<RentalPage />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
