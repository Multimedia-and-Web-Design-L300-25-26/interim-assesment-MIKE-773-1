import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCryptos, getGainers, getNewListings } from '../api/crypto.js';

// Mock data for when backend is not available
const mockCryptos = [
  { _id: '1', name: 'Bitcoin', symbol: 'BTC', price: 45000, change24h: 2.5 },
  { _id: '2', name: 'Ethereum', symbol: 'ETH', price: 2800, change24h: -1.2 },
  { _id: '3', name: 'Binance Coin', symbol: 'BNB', price: 320, change24h: 0.8 },
  { _id: '4', name: 'Cardano', symbol: 'ADA', price: 0.45, change24h: 3.1 },
  { _id: '5', name: 'Solana', symbol: 'SOL', price: 95, change24h: -0.5 },
  { _id: '6', name: 'Polkadot', symbol: 'DOT', price: 8.20, change24h: 1.7 }
];

const mockGainers = [
  { _id: '4', name: 'Cardano', symbol: 'ADA', change24h: 3.1 },
  { _id: '1', name: 'Bitcoin', symbol: 'BTC', change24h: 2.5 },
  { _id: '6', name: 'Polkadot', symbol: 'DOT', change24h: 1.7 },
  { _id: '3', name: 'Binance Coin', symbol: 'BNB', change24h: 0.8 },
  { _id: '5', name: 'Solana', symbol: 'SOL', change24h: -0.5 },
  { _id: '2', name: 'Ethereum', symbol: 'ETH', change24h: -1.2 }
];

const mockNewListings = [
  { _id: '6', name: 'Polkadot', symbol: 'DOT', createdAt: new Date().toISOString() },
  { _id: '5', name: 'Solana', symbol: 'SOL', createdAt: new Date(Date.now() - 86400000).toISOString() },
  { _id: '4', name: 'Cardano', symbol: 'ADA', createdAt: new Date(Date.now() - 172800000).toISOString() },
  { _id: '3', name: 'Binance Coin', symbol: 'BNB', createdAt: new Date(Date.now() - 259200000).toISOString() },
  { _id: '2', name: 'Ethereum', symbol: 'ETH', createdAt: new Date(Date.now() - 345600000).toISOString() },
  { _id: '1', name: 'Bitcoin', symbol: 'BTC', createdAt: new Date(Date.now() - 432000000).toISOString() }
];

function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [cryptoRes, gainersRes, newRes] = await Promise.all([
          getCryptos(),
          getGainers(),
          getNewListings(),
        ]);

        // Check if all responses are successful
        if (cryptoRes.success && gainersRes.success && newRes.success) {
          setCryptos(cryptoRes.data);
          setGainers(gainersRes.data);
          setNewListings(newRes.data);
          setError('');
        } else {
          // If backend is not available, use mock data
          console.log('Backend not available, using mock data');
          setCryptos(mockCryptos);
          setGainers(mockGainers);
          setNewListings(mockNewListings);
          setError('Demo mode: Using sample data. Backend not connected.');
        }
      } catch (err) {
        console.log('API error, using mock data:', err);
        // Use mock data when backend is not available
        setCryptos(mockCryptos);
        setGainers(mockGainers);
        setNewListings(mockNewListings);
        setError('Demo mode: Using sample data. Backend not connected.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <> 
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Student Project</p>
          <h1>Crypto App for learning and demo use</h1>
          <p className="hero-description">
            Explore the latest digital assets, track top gainers, and add new cryptocurrencies in a student-built demo application.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/login">
              Login
            </Link>
            <Link className="button secondary" to="/register">
              Register
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="market-card">
            <div className="market-card-header">
              <span>TOP ASSET</span>
              <strong>Demo Crypto</strong>
            </div>
            <div className="market-card-body">
              <p className="market-value">$3,225.42</p>
              <p className="market-change positive">+4.6%</p>
            </div>
            <p className="market-note">Data is mocked for demonstration purposes.</p>
          </div>
        </div>
      </section>

      <section className="dashboard-page">
        <div className="section-header">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Market snapshot</h2>
          </div>
          <p className="section-description">Live crypto listing, gainers, and new assets drawn from the backend API.</p>
        </div>
        {isLoading && <div className="loading-message">Loading crypto data...</div>}
        {error && <div className="info-message">{error}</div>}
        <div className="grid">
          <div className="card">
            <h3>All Cryptocurrencies</h3>
            <ul>
              {cryptos.slice(0, 6).map((crypto) => (
                <li key={crypto._id}>
                  <strong>{crypto.name}</strong> ({crypto.symbol}) • ${crypto.price.toFixed(2)} • {crypto.change24h}%
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Top Gainers</h3>
            <ul>
              {gainers.slice(0, 6).map((crypto) => (
                <li key={crypto._id}>
                  {crypto.name} ({crypto.symbol}) +{crypto.change24h}%
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>New Listings</h3>
            <ul>
              {newListings.slice(0, 6).map((crypto) => (
                <li key={crypto._id}>
                  {crypto.name} ({crypto.symbol}) • Added {new Date(crypto.createdAt).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
