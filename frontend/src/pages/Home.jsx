import { useEffect, useState } from 'react';
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
    <section className="dashboard-page">
      <h1>Crypto Dashboard</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="grid">
        <div className="card">
          <h2>All Cryptocurrencies</h2>
          <ul>
            {cryptos.slice(0, 6).map((crypto) => (
              <li key={crypto._id}>
                <strong>{crypto.name}</strong> ({crypto.symbol}) • ${crypto.price.toFixed(2)} • {crypto.change24h}%
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2>Top Gainers</h2>
          <ul>
            {gainers.slice(0, 6).map((crypto) => (
              <li key={crypto._id}>
                {crypto.name} ({crypto.symbol}) +{crypto.change24h}%
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2>New Listings</h2>
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
  );
}

export default Home;
