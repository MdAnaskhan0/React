import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBarLight/NavigationBar';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'light' ? 'bg-slate-500' : 'bg-slate-700'} style={{ minHeight: '100vh' }}>
      <NavigationBar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
