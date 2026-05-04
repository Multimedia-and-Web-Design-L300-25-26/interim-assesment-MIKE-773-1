# Interim Assessment: Full-Stack Integration – Coinbase Clone

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/bMYWKvYv)

In this assignment, you will integrate your cloned coinbase frontend with a backend API to build a functional cryptocurrency platform with authentication and dynamic data.

## Project Structure

This repository contains both the backend API and frontend application:

- `backend/` - Node.js + MongoDB backend with JWT authentication
- `frontend/` - React + Vite frontend application

## Backend Features

- JWT authentication with HTTP-only cookie storage
- User registration and login
- Protected user profile endpoint
- CRUD-like crypto endpoints
- MongoDB database persistence with Mongoose

## Backend API Endpoints

### Auth
- `POST /api/auth/register` - register a new user
- `POST /api/auth/login` - login and receive JWT cookie
- `POST /api/auth/logout` - clear authentication cookie

### Profile
- `GET /api/profile` - fetch authenticated user profile (protected)

### Crypto
- `GET /api/crypto` - get all cryptocurrencies
- `GET /api/crypto/gainers` - get top gainers sorted by 24h change
- `GET /api/crypto/new` - get newest listings sorted by date
- `POST /api/crypto` - add a new cryptocurrency (protected)

## Frontend Features

- React application with routing
- Authentication integration
- Cryptocurrency data display
- Student project disclaimers and warnings
- Responsive design

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Copy `.env.example` to `.env` and configure your environment variables:
   ```bash
   cp .env.example .env
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment Instructions

### Backend Deployment (Render)

1. **Create a Render account** at [render.com](https://render.com)
2. **Connect your GitHub repository**
3. **Create a new Web Service**:
   - **Service Type**: Web Service
   - **Repository**: `Multimedia-and-Web-Design-L300-25-26/interim-assesment-MIKE-773-1`
   - **Branch**: `main`
   - **Root Directory**: Leave empty (backend is in root)
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Set Environment Variables**:
   - `NODE_ENV`: `production`
   - `JWT_SECRET`: Generate a secure random string
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `CLIENT_URL`: Your Netlify frontend URL (e.g., `https://your-app-name.netlify.app`)

5. **Deploy** - Render will build and deploy your backend

### Frontend Deployment (Netlify)

1. **Create a Netlify account** at [netlify.com](https://netlify.com)
2. **Connect your GitHub repository**
3. **Deploy settings**:
   - **Base directory**: `frontend`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `frontend/dist`

4. **Set Environment Variable** (after backend is deployed):
   - `VITE_API_BASE_URL`: Your Render backend URL + `/api` (e.g., `https://your-backend.onrender.com/api`)

5. **Deploy** - Netlify will build and deploy your frontend

### Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas account** at [mongodb.com/atlas](https://mongodb.com/atlas)
2. **Create a free cluster**
3. **Create database user** with read/write permissions
4. **Whitelist your IP** (or 0.0.0.0/0 for all IPs)
5. **Get connection string** and update `MONGO_URI` in Render

### Post-Deployment Checklist

- ✅ Backend deployed on Render
- ✅ Frontend deployed on Netlify
- ✅ MongoDB Atlas database connected
- ✅ Environment variables configured
- ✅ CORS configured for frontend domain
- ✅ Frontend `VITE_API_BASE_URL` points to backend
- ✅ Test login/register functionality
- ✅ Test crypto data endpoints

## Environment Variables

Create a `.env` file in the backend directory with:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/coinbase_clone?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
NODE_ENV=development
PORT=5000
```

## Deployment Notes

- **Backend**: Recommended to deploy on Render
- **Frontend**: Deploy on Netlify with a neutral domain name (avoid "coinbase" in URL)
- The frontend includes student project disclaimers to comply with deployment policies

## Important Disclaimers

This is a student project created for educational purposes only. It is not affiliated with Coinbase or any cryptocurrency exchange. Please do not enter real personal information or passwords.

---

Push your backend code to GitHub Classroom, deploy the backend (recommended: Render), and integrate it into your Coinbase clone frontend repository. After completing the integration, deploy the updated frontend as well. Finally, submit the links to your deployed backend, deployed frontend, and your updated Coinbase clone repository via the Google Form attached.

**NOTE:** Ensure that all submitted links are accurate and working, as no marks will be awarded for invalid or inaccessible submissions.

You are required to implement the features using Node.js with MongoDB as the database. Create proper data models (schemas) and structure your project using best practices (models, routes, and controllers). All features must be exposed through RESTful APIs for the frontend to consume.

## 1. Authentication System (JWT-Based)

### Register (GET /register)

Create a user account using:

- Name
- Email
- Password

Send data to the backend API and ensure it is properly stored in the database. Also handle success and error responses appropriately, returning clear and meaningful feedback based on the outcome of each request.

### Login (GET /login)

Authenticate users using email and password, store the returned JWT token securely (preferably using HTTP-only cookies), and redirect the user to the homepage after a successful login.

## 2. Protected User Profile Page

### Create a User Dashboard/Profile Page(GET /profile)

Fetch and display:

- User name
- Email
- Any other relevant info from backend

**NOTE:** This page must be protected and only accessible to authenticated users with a valid JWT token. If the user is not authenticated, they should be redirected to the login page.

## 3. Crypto Data Integration

### GET /crypto (All Tradable Cryptocurrencies)

Fetch all available cryptocurrencies from the backend and display them on the frontend.

### GET /crypto/gainers (Top Gainers)

Fetch cryptocurrencies with the highest percentage increase in price, sorted from highest to lowest.

### GET /crypto/new (New Listings)

Fetch the most recently added cryptocurrencies, sorted from newest to oldest.

### POST /crypto (Add New Cryptocurrency)

Create a new cryptocurrency using:

- Name
- Symbol
- Price
- Image
- 24h Change (percentage change in price over the last 24 hours, e.g. +2.5)

Send data to the backend API and ensure it is properly stored in the database (MongoDB). Also handle success and error responses appropriately, returning clear and meaningful feedback based on the outcome of each request.

---

Push your backend code to GitHub Classroom, deploy the backend (recommended: Render), and integrate it into your Coinbase clone frontend repository. After completing the integration, deploy the updated frontend as well. Finally, submit the links to your deployed backend, deployed frontend, and your updated Coinbase clone repository via the Google Form attached.

**NOTE:** Ensure that all submitted links are accurate and working, as no marks will be awarded for invalid or inaccessible submissions.
>>>>>>> d2dc2acc3c76e3ea74cef00ae6db145bb8457941
