import { useState } from 'react';
import { createCrypto } from '../api/crypto.js';

function AddCrypto() {
  const [form, setForm] = useState({ name: '', symbol: '', price: '', image: '', change24h: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    const payload = {
      name: form.name,
      symbol: form.symbol,
      price: parseFloat(form.price),
      image: form.image,
      change24h: parseFloat(form.change24h),
    };

    const result = await createCrypto(payload);
    if (!result.success) {
      setError(result.message || 'Failed to add crypto');
      return;
    }

    setMessage('Cryptocurrency added successfully.');
    setForm({ name: '', symbol: '', price: '', image: '', change24h: '' });
  };

  return (
    <section className="form-page">
      <h1>Add New Cryptocurrency</h1>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Symbol
          <input name="symbol" value={form.symbol} onChange={handleChange} required />
        </label>
        <label>
          Price
          <input name="price" type="number" step="0.01" value={form.price} onChange={handleChange} required />
        </label>
        <label>
          Image URL
          <input name="image" type="url" value={form.image} onChange={handleChange} required />
        </label>
        <label>
          24h Change
          <input name="change24h" type="number" step="0.01" value={form.change24h} onChange={handleChange} required />
        </label>
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddCrypto;
