import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setLongURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortURL('');

    try {
      const response = await axios.post('http://localhost:3000/url', { url: longURL });
      setShortURL(response.data.short_url);
    } catch (err) {
      setError('Failed to shorten the URL. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="text"
            placeholder="Enter your long URL here"
            value={longURL}
            onChange={handleInputChange}
            className="url-input"
            required
          />
          <button type="submit" className="shorten-button">Shorten URL</button>
        </form>
        {shortURL && (
          <div className="result">
            <p>Short URL: <a href={shortURL} target="_blank" rel="noopener noreferrer">{shortURL}</a></p>
          </div>
        )}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

