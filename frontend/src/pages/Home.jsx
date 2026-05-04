import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCryptos, getGainers, getNewListings } from '../api/crypto.js';

function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [cryptoRes, gainersRes, newRes] = await Promise.all([
          getCryptos(),
          getGainers(),
          getNewListings(),
        ]);

        if (!cryptoRes.success || !gainersRes.success || !newRes.success) {
          setError('Unable to fetch crypto data.');
          return;
        }

        setCryptos(cryptoRes.data);
        setGainers(gainersRes.data);
        setNewListings(newRes.data);
      } catch (err) {
        setError('Unable to fetch crypto data.');
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
        {error && <div className="error-message">{error}</div>}
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
