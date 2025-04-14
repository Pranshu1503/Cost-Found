import { Link } from "react-router-dom"
import "../styles/home-page.css"

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Cost&Found</h1>
          <p>Find what you lost, sell what you don't need, rent what you want.</p>
          <div className="hero-buttons">
            <Link to="/lost-found" className="btn primary">
              Report Lost Item
            </Link>
            <Link to="/marketplace" className="btn secondary">
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon lost-found-icon"></div>
            <h3>Lost & Found</h3>
            <p>Report lost items or help others find their belongings.</p>
            <Link to="/lost-found" className="feature-link">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon marketplace-icon"></div>
            <h3>Marketplace</h3>
            <p>Buy and sell second-hand goods at affordable prices.</p>
            <Link to="/marketplace" className="feature-link">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon rental-icon"></div>
            <h3>Rentals</h3>
            <p>Rent bikes, furniture, and other essential items.</p>
            <Link to="/rentals" className="feature-link">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create an Account</h3>
            <p>Sign up for free and set up your profile.</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Post or Browse</h3>
            <p>Post your items or browse what others have listed.</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Connect & Transact</h3>
            <p>Message users and complete your transaction.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join our community today and start finding, selling, or renting items.</p>
        <Link to="/register" className="btn primary">
          Sign Up Now
        </Link>
      </section>
    </div>
  )
}

export default HomePage
