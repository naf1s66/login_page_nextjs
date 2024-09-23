'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function WelcomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();  
  const username = searchParams.get('username');  
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    if (username) {
      setGreeting(`Welcome, ${username}!`);
    } else {
      router.push('/login');  
    }
  }, [username]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>{greeting}</h1>
      <button onClick={() => router.push('../')} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
}
