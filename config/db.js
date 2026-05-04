const mongoose = require('mongoose');
const Crypto = require('../models/Crypto');

const defaultCryptos = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 45000,
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    change24h: 2.5,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2800,
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    change24h: -1.2,
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 320,
    image: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
    change24h: 0.8,
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.45,
    image: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    change24h: 3.1,
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 95,
    image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    change24h: -0.5,
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    price: 8.2,
    image: 'https://cryptologos.cc/logos/polkadot-dot-logo.png',
    change24h: 1.7,
  },
];

const seedDefaultCryptos = async () => {
  const count = await Crypto.countDocuments();
  if (count === 0) {
    await Crypto.insertMany(defaultCryptos);
    console.log(`Seeded ${defaultCryptos.length} default crypto documents.`);
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
    await seedDefaultCryptos();
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
