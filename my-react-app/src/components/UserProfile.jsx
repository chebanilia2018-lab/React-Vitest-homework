import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!res.ok) {
          throw new Error('Request failed');
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message || 'Failed to load user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading user...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}

export default UserProfile;