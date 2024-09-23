'use client';


import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      alert('Please enter both username and password');
      return;
    }


    router.push(`/welcome?username=${username}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '20px' }}>Login</button>
      </form>
    </div>
  );
}
