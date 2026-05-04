# Crypto App Frontend

This frontend is a Vite + React application wired to the backend API.

## Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Run the frontend locally:
   ```bash
   npm run dev
   ```

## Backend integration

The frontend proxies API requests under `/api` to the backend running on `http://localhost:5000`.

### Auth and profile API calls

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/profile`

### Crypto API calls

- `GET /api/crypto`
- `GET /api/crypto/gainers`
- `GET /api/crypto/new`
- `POST /api/crypto`

## Notes

- The app uses `credentials: 'include'` for cookies so the JWT is stored in an HTTP-only cookie.
- Use the backend server at `http://localhost:5000` when running locally.
- For Netlify deployment, ensure the site is built from the `frontend` folder and that the backend URL is configured with `VITE_API_BASE_URL` if the backend is hosted separately.
