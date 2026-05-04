import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import WarningBanner from './components/WarningBanner.jsx';
import FooterDisclaimer from './components/FooterDisclaimer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import AddCrypto from './pages/AddCrypto.jsx';

function App() {
  return (
    <div className="app-shell">
      <WarningBanner />
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-crypto" element={<AddCrypto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <FooterDisclaimer />
    </div>
  );
}

export default App;
