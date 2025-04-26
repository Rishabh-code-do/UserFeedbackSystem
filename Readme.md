# User Feedback System

A full-stack application to collect and display user feedback using **Node.js (Express.js)** for the backend and **React.js** for the frontend.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Backend API Endpoints](#backend-api-endpoints)
- [Frontend Routes](#frontend-routes)
- [Database Setup](#database-setup)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)

---

## Getting Started

Follow these steps to set up the project locally.

### Clone the Repository

```bash
https://github.com/Rishabh-code-do/UserFeedbackSystem.git
```

# Backend Setup

Follow these steps to set up and run the backend server.

## Steps:

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install backend dependencies:

```bash
npm install
npm install cors express dotenv
```

3. Run the code

```bash
node server.js
```

# Frontend Setup

Follow these steps to set up and run the frontend.

## Steps:

1. Navigate to the backend directory:

```bash
cd frontend
```

2. Install backend dependencies:

```bash
npm install
npm install react-router-dom
npm intall axios
```

3. Run the code

```bash
npm start
```


## Backend API Endpoints

### 1. `POST /api/feedback`
Submit user feedback.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "category": "bug",
  "message": "This is amazing!"
}
```

### 2. `GET /api/feedback`
Fetch all feedback entries.

#### Query Parameters (optional)

- `sortField`: Sort feedback by fields like `timestamp` or `name`.
- `category`: Filter on basis of category(feature,bug,suggestion).
- `sortOrder`: Sort by order `asc` or `desc`
- `page`: Page Number
- `limit`: Page Limit

#### Example Request

```bash
GET /api/feedback?category=bug&sortField=date&sortOrder=asc&page=1&limit=10
```


# Frontend Routes

```bash
- `/` — Feedback Form (Submit feedback)
- `/dashboard` — Dashboard (View feedback with filter and sort options)
```

# Database Setup

## 1. Install MongoDB

- Download MongoDB Community Server from the official website:  
  [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

- Follow the installation instructions for your operating system (Windows, macOS, Linux).

## 2. Start MongoDB Server

After installation, start the MongoDB server.

- On Windows:

```bash
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
```

- On Mac(Homebrew):

```bash
brew services start mongodb-community@6.0
```

- On linux:

```bash
sudo systemctl start mongod
```

- MongoDB server will run by default at:

```bash
mongodb://localhost:27017
```

## 3. Verify MongoDB is Running

- Check if MongoDB is running by connecting with the Mongo shell:

  ```bash
  mongosh
  ```

- If connected successfully, you'll see a prompt like:

  ```bash
  test>
  ```

## 4. Create a New Database

- Inside the mongosh shell:

  ```bash
  use feedback_db
  ```

- This will create (or switch to) a database named feedback_db.

# Notes

- Ensure both backend and frontend servers are running at the same time.

# Technologies Used

- Backend: Node.js, Express.js

- Frontend: React.js

- Database: MongoDB / PostgreSQL

# Future Improvements

- Right now we are using search feature at frontend for particular paginated data. In future we can add this search feature at backend using Trie and Hashmap to search data at backend and get all data in paginated api.

- Can add a feature to export feedback data for range of date and time in CSV format.
