# Shrinkyfy - URL Shortener

Shrinkyfy is a full-stack web application for shortening URLs, featuring user authentication, custom slugs, and a dashboard for managing your links.

## Features

- Shorten long URLs quickly
- User registration and login
- Custom short URL slugs for authenticated users
- Dashboard to view and manage your URLs
- Click tracking for each short URL

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/nishant1810/Shrinkify.git
cd Shrinkyfy
```

#### 2. Install dependencies

**Backend:**
```sh
cd BACKEND
npm install
```

**Frontend:**
```sh
cd ../FRONTEND
npm install
```

#### 3. Environment Variables

Create a `.env` file in the `BACKEND` folder:

```
MONGO_URI=add_mongodb_uri
APP_URL=add_app_url
JWT_SECRET=your_jwt_secret_here
```

#### 4. Run the application

**Start Backend:**
```sh
cd BACKEND
npm start
```

**Start Frontend:**
```sh
cd ../FRONTEND
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) and the backend at [http://localhost:3000](http://localhost:3000).

## License

MIT

---
