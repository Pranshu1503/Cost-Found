# Lost & Found App

A WebTech Project that combines a **Lost & Found** system with a **second-hand marketplace**. This web application allows students to:

- Report lost items.
- Trade used goods.
- Rent items like two-wheelers or furniture.

The platform fosters community convenience and sustainability by providing a centralized solution for these needs.

---

## Features

- **Lost & Found System**: Report and search for lost items.
- **Marketplace**: Buy, sell, or trade second-hand goods.
- **Rental Services**: Rent items such as vehicles or furniture.
- **User-Friendly Interface**: Built with React.js for a seamless user experience.
- **Backend API**: Powered by Python Flask and MongoDB for robust data handling.

---

## Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **Axios**: For making API requests.
- **CSS**: For styling the components.

### Backend

- **Python Flask**: For server-side logic.
- **Flask-CORS**: For handling cross-origin requests.
- **Flask-RESTful**: For building RESTful APIs.
- **MongoDB**: For database storage.
- **PyMongo**: For connecting Flask to MongoDB.

---

## Installation and Setup

### Prerequisites

- Python 3.x installed.
- Node.js and npm installed.
- MongoDB installed and running locally.

### Steps to Run the Application

1. Clone the Repository

```bash
git clone https://github.com/your-repo/lost-found-app.git
cd lost-found-app
```

GitHub Copilot
Here’s the updated README.md file reflecting the Python Flask backend:

2. Install Dependencies
Frontend
```bash
cd lost-found-app
npm install
```

Backend
```bash
cd lost-found-app-backend
pip install -r requirements.txt
```

3. Configure Environment Variables
Create a .env file in the lost-found-app-backend directory and add the following:
```bash
MONGO_URI=mongodb://localhost:27017/lost_found_app
PORT=5000
```

4. Start the Application
Start the Backend
```bash
cd lost-found-app-backend
python app.py
```
Start the Frontend
```bash
cd lost-found-app
npm start
```

5. Access the Application
```bash
http://localhost:3000
```