import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/auth.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const result = await login({ email, password });
    if (!result.success) {
      setError(result.message || 'Login failed');
      return;
    }

    navigate('/profile');
  };

  return (
    <section className="form-page">
      <h1>Login</h1>
      <div className="demo-notice">
        Demo app – do not use your real password
      </div>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
        </label>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <p>
        New here? <Link to="/register">Register</Link>
      </p>
    </section>
  );
}

export default Login;
