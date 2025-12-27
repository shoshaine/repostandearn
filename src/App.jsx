import React, { useState } from 'react';
import Background from './components/Background';
import LandingPage from './components/LandingPage';
import JoinForm from './components/JoinForm';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Background />
      {showForm ? (
        <JoinForm />
      ) : (
        <LandingPage onStart={() => setShowForm(true)} />
      )}
    </div>
  );
}

export default App;
