import React, { useState } from 'react';
import './JoinForm.css';

const JoinForm = () => {
  const [username, setUsername] = useState('');
  const [wallet, setWallet] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (username && wallet) {
      setSubmitted(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  if (submitted) {
    return (
      <div className="form-container">
        <div className="form-card">
          <h2>You are now able to earn by Reposting</h2>
          <p className="success-message">
            The rewards will be sent every 5 minutes and will be based on how many actions you perform with Repost account
          </p>
          <button 
            className="join-button"
            onClick={() => window.location.href = 'https://x.com/repostandearn'}
          >
            Go to X
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">

      <div className="form-card">
        <h2>Join the Community</h2>
        <form onSubmit={handleJoin}>
          <div className="input-group">
            <label htmlFor="username">X Username</label>
            <input
              type="text"
              id="username"
              placeholder="@username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="wallet">Wallet Address</label>
            <input
              type="text"
              id="wallet"
              placeholder="Solana Wallet Address"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="join-button">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
