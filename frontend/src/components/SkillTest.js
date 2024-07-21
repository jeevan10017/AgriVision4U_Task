import React, { useState } from 'react';
import UpdateScores from './UpdateScores';
import './SkillTest.css';

function SkillTest() {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsUpdateOpen(true);
  };

  return (
    <div className="skill-test">
      <h1>Skill Test</h1>
      <div className="skill-test-header">
        <div className="skill-details">
          <img src="/path/to/logo.png" alt="HTML5" />
          <div>
            <h2>Hyper Text Markup Language</h2>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
        </div>
        <button onClick={handleUpdateClick}>Update</button>
      </div>
      {isUpdateOpen && <UpdateScores onClose={() => setIsUpdateOpen(false)} />}
      <div className="quick-statistics">
        <h3>Quick Statistics</h3>
        <div className="stats">
          <div className="stat">
            <p>Your Rank</p>
            <h2>7</h2>
          </div>
          <div className="stat">
            <p>Percentile</p>
            <h2>96%</h2>
          </div>
          <div className="stat">
            <p>Correct Answers</p>
            <h2>46/15</h2>
          </div>
        </div>
      </div>
      <div className="syllabus-analysis">
        <h3>Syllabus Wise Analysis</h3>
        <div className="analysis">
          <p>HTML Tools, Forms, History: 80%</p>
          <p>Tags & References in HTML: 60%</p>
          <p>Tables & References in HTML: 24%</p>
          <p>Tables & CSS Basics: 96%</p>
        </div>
      </div>
      <div className="question-analysis">
        <h3>Question Analysis</h3>
        <p>You scored 46 questions correct out of 15. However, it still needs some improvements.</p>
      </div>
    </div>
  );
}

export default SkillTest;
