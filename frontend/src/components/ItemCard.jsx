import { Link } from "react-router-dom"
import "../styles/item-card.css"

const ItemCard = ({ item, type }) => {
  // Different badge colors based on item type
  const getBadgeClass = () => {
    switch (type) {
      case "lost":
        return "badge-lost"
      case "found":
        return "badge-found"
      case "sale":
        return "badge-sale"
      case "rental":
        return "badge-rental"
      default:
        return ""
    }
  }

  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="item-card">
      <div className="item-badge">
        <span className={getBadgeClass()}>
          {type === "lost" && "Lost"}
          {type === "found" && "Found"}
          {type === "sale" && "For Sale"}
          {type === "rental" && "For Rent"}
        </span>
      </div>

      <div className="item-image">
        <img src={item.image || `/placeholder.svg?height=200&width=300`} alt={item.title} />
      </div>

      <div className="item-content">
        <h3 className="item-title">{item.title}</h3>

        <div className="item-details">
          {(type === "sale" || type === "rental") && (
            <p className="item-price">
              ${item.price}
              {type === "rental" && "/day"}
            </p>
          )}

          {(type === "lost" || type === "found") && <p className="item-location">{item.location}</p>}

          <p className="item-date">{formatDate(item.date)}</p>
        </div>

        <p className="item-description">{item.description.substring(0, 100)}...</p>

        <Link to={`/item/${item.id}`} className="item-link">
          View Details
        </Link>
      </div>
    </div>
  )
}

// Default props for development
ItemCard.defaultProps = {
  item: {
    id: "1",
    title: "Sample Item",
    description: "This is a sample item description that will be truncated if it gets too long...",
    date: new Date().toISOString(),
    location: "Sample Location",
    price: 0,
    image: null,
  },
  type: "sale",
}

export default ItemCard
