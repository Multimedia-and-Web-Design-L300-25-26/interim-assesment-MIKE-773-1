import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api/auth.js';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await getProfile();
      if (!result.success) {
        navigate('/login');
        return;
      }
      setProfile(result.data);
    };

    fetchProfile();
  }, [navigate]);

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <section className="profile-page">
      <h1>User Profile</h1>
      <div className="profile-card">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Member since:</strong> {new Date(profile.createdAt).toLocaleDateString()}
        </p>
      </div>
    </section>
  );
}

export default Profile;
