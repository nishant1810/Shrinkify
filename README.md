# URL Shortener Backend

This is the backend for a URL Shortener application built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication (JWT-based)
- Create short URLs (with or without user authentication)
- Custom short URL slugs
- Track number of clicks per short URL
- User dashboard for managing URLs

## Project Structure

```
BACKEND/
  ├── .env
  ├── app.js
  ├── package.json
  └── src/
      ├── config/
      ├── controller/
      ├── dao/
      ├── middleware/
      ├── models/
      ├── routes/
      ├── services/
      └── utils/
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone <repo-url>
   cd BACKEND
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `BACKEND` directory:

   ```
   MONGO_URI=mongodb://localhost:27017/url-shortner
   APP_URL=http://localhost:3000/
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:

   ```sh
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login user
- `POST /api/auth/logout` — Logout user
- `GET /api/auth/me` — Get current user info (requires authentication)

### Short URL

- `POST /api/create` — Create a new short URL

### User

- `POST /api/user/urls` — Get all URLs created by the authenticated user

### Redirect

- `GET /:id` — Redirect to the original URL

## License

MIT
