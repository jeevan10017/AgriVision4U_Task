import React, { useState } from 'react';
import './UpdateScores.css';

function UpdateScores({ onClose }) {
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [currentScore, setCurrentScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    onClose();
  };

  return (
    <div className="update-scores">
      <h2>Update Scores</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Update your Rank:
          <input
            type="number"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          />
        </label>
        <label>
          Update your Percentile:
          <input
            type="number"
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
          />
        </label>
        <label>
          Update your Current Score (out of 15):
          <input
            type="number"
            value={currentScore}
            onChange={(e) => setCurrentScore(e.target.value)}
          />
        </label>
        <div className="buttons">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateScores;
