# Coinbase Clone Backend

This repository contains the backend API for the Coinbase clone interim assessment.

## Features

- JWT authentication with HTTP-only cookie storage
- User registration and login
- Protected user profile endpoint
- CRUD-like crypto endpoints
- MongoDB database persistence with Mongoose

## API Endpoints

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

## Setup

1. Copy `.env.example` to `.env`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Notes

- The frontend should call the backend with credentials enabled to use HTTP-only cookies.
- For production, set `NODE_ENV=production` and configure secure cookies properly.
