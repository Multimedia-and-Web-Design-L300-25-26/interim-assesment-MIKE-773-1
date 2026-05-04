const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const cryptoRoutes = require('./routes/cryptoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cookieParser());
const corsOrigin = process.env.CLIENT_URL || (process.env.NODE_ENV === 'production' ? false : true);
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);
if (process.env.NODE_ENV === 'production' && !process.env.CLIENT_URL) {
  console.warn('Warning: CLIENT_URL is not set in production. CORS is disabled until CLIENT_URL is configured.');
}

app.get('/', (req, res) => {
  res.json({ message: 'Coinbase clone backend is running.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/crypto', cryptoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Server error', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
