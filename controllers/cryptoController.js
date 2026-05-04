const Crypto = require('../models/Crypto');

exports.getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ name: 1 });
    res.json({ success: true, data: cryptos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to load cryptocurrencies', error: error.message });
  }
};

exports.getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find().sort({ change24h: -1 }).limit(20);
    res.json({ success: true, data: gainers });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to load top gainers', error: error.message });
  }
};

exports.getNewListings = async (req, res) => {
  try {
    const listings = await Crypto.find().sort({ createdAt: -1 }).limit(20);
    res.json({ success: true, data: listings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to load new listings', error: error.message });
  }
};

exports.createCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;
    if (!name || !symbol || price == null || !image || change24h == null) {
      return res.status(400).json({ success: false, message: 'All fields are required: name, symbol, price, image, change24h' });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h,
    });

    res.status(201).json({ success: true, message: 'Cryptocurrency created successfully', data: crypto });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to create cryptocurrency', error: error.message });
  }
};
