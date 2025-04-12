
import React, { useState } from 'react';
import SidebarTabs from './components/SidebarTabs';
import TopToolbar from './components/TopToolbar';
import { auth } from './firebase/config';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [timeFrame, setTimeFrame] = useState('1m');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <SidebarTabs />
      <div className="flex-1 flex flex-col">
        <TopToolbar
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
          user={user}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <div className="flex-1 p-4 text-white">
          <BitcoinChart />
          <p>مرحبًا بك في Abood Chart!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
