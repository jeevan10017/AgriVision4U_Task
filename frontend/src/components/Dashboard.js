import React, { useState, useEffect, useContext, useRef } from 'react';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, BarChart, Bar, Legend, ResponsiveContainer
} from 'recharts';
import './Dashboard.css';
import achievementIcon from './assets/achievementicon.png';
import axios from 'axios';
import Joyride from 'react-joyride';
import { AuthContext } from './authContext';
import { toPng } from 'html-to-image';

const initialData = [
  { name: 'Initial', classAverage: 0, userScore: 0 },
  { name: 'Initial Test', classAverage: 81, userScore: 76 },
];

const COLORS = ['#0088FE', '#FF8042'];

const Dashboard = () => {
  const { user } = useContext(AuthContext); 
  const [rank, setRank] = useState(856);
  const [percentile, setPercentile] = useState(86);
  const [correctAnswers, setCorrectAnswers] = useState(57);
  const [data, setData] = useState(initialData);
  const [userScore, setUserScore] = useState(76);
  const [aptitudeScore, setAptitudeScore] = useState(0);
  const [mathScore, setMathScore] = useState(0);
  const [csScore, setCsScore] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dashboardRef = useRef(null); // Create a ref for the entire dashboard

  const email = user?.email;

  useEffect(() => {
    document.title = 'Dashboard - Skill Test';

    if (!email) return; 

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/${email}`);
        const userData = response.data;
        if (userData) {
          setRank(userData.rank || 856);
          setPercentile(userData.percentile || 86);
          setCorrectAnswers(userData.correctAnswers || 57);
          setData(userData.data || initialData);
          setUserScore(userData.userScore || 76);
          setAptitudeScore(userData.aptitudeScore || 0);
          setMathScore(userData.mathScore || 0);
          setCsScore(userData.csScore || 0);
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchData();
  }, [email]);

  useEffect(() => {
    if (!email) return; 

    const updateUser = async () => {
      try {
        await axios.put(`http://localhost:5000/api/user/${email}`, {
          email,
          rank,
          percentile,
          correctAnswers,
          data,
          userScore,
          aptitudeScore,
          mathScore,
          csScore,
        });
      } catch (error) {
        console.error('Error updating user data', error);
      }
    };

    if (rank && percentile && correctAnswers && data && userScore && aptitudeScore && mathScore && csScore) {
      updateUser();
    }
  }, [rank, percentile, correctAnswers, data, userScore, aptitudeScore, mathScore, csScore, email]);

  const handleClassAverageUpdate = () => {
    const newClassAverage = Math.floor(Math.random() * 100);
    const newData = {
      name: `Test ${data.length}`,
      classAverage: newClassAverage,
      userScore: 0,
    };
    setData([...data, newData]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const totalScore = aptitudeScore + mathScore + csScore;
    setUserScore(totalScore);

    const newData = [...data];
    newData[newData.length - 1].userScore = totalScore;
    setData(newData);
    setIsFormVisible(false);

    const userPercentile = (totalScore / 100) * 100;
    setPercentile(userPercentile);
    setRank(Math.floor(userPercentile * 10));
    setCorrectAnswers((userPercentile * 0.7).toFixed(0));
  };

  const maxScores = {
    aptitude: 15,
    math: 13,
    cs: 72,
  };

  const userAptitudePercentile = (aptitudeScore / maxScores.aptitude) * 100 || 0;
  const userMathPercentile = (mathScore / maxScores.math) * 100 || 0;
  const userCsPercentile = (csScore / maxScores.cs) * 100 || 0;

  const steps = [
    {
      target: '.update-average-button',
      content: 'First, update the class average by clicking this button.',
    },
    {
      target: '.enter-score-button',
      content: 'Next, enter your marks by clicking this button.',
    },
    {
      target: '.form-popup',
      content: 'Fill out the form with your scores and submit.',
    },
    {
      target: '.charts',
      content: 'Check out the charts to see your performance analysis.',
    },
  ];

  const handleShare = async () => {
    try {
      const dataUrl = await toPng(dashboardRef.current, {
        cacheBust: true,
        backgroundColor: 'white',
      });
      if (navigator.share) {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], 'dashboard.png', { type: 'image/png' });

        await navigator.share({
          title: 'My Dashboard',
          text: 'Check out my Skill Test dashboard!',
          files: [file],
        });
      } else {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'dashboard.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error sharing dashboard', error);
    }
  };

  return (
    <div className="dashboard" ref={dashboardRef}>
      <Joyride steps={steps} continuous={true} showProgress={true} showSkipButton={true} />

      <button className="share-button" onClick={handleShare}>Share</button>

      <div className="statistics">
        <div className="stat-item">
          <h3>Rank</h3>
          <p><b>{999 - rank}/1000</b></p>
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Remaining', value: 1000 - rank },
                  { name: 'Your Rank', value: rank },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={40}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                <Cell key="cell-0" fill={COLORS[0]} />
                <Cell key="cell-1" fill={COLORS[1]} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="stat-item">
          <h3>Percentile</h3>
          <p><b>{percentile}%</b></p>
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Percentile', value: percentile },
                  { name: 'Remaining', value: 100 - percentile },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={40}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                <Cell key="cell-0" fill={COLORS[0]} />
                <Cell key="cell-1" fill={COLORS[1]} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="stat-item">
          <h3>Correct Answers</h3>
          <p><b>{correctAnswers}/70</b></p>
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Correct Answers', value: percentile * 0.7 },
                  { name: 'Remaining', value: 70 - percentile * 0.7 },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={40}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                <Cell key="cell-0" fill={COLORS[0]} />
                <Cell key="cell-1" fill={COLORS[1]} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <button className="update-average-button" onClick={handleClassAverageUpdate}>Update Class Average</button>
      <button className="enter-score-button" onClick={() => setIsFormVisible(true)}>Enter Your Score</button>

      {isFormVisible && (
        <div className="form-popup">
          <form onSubmit={handleFormSubmit} className="form-container">
            <h2>Enter Your Score</h2>
            <label>
              General Aptitude (Max: 15)
              <input
                type="number"
                min="0"
                max="15"
                value={aptitudeScore}
                onChange={(e) => setAptitudeScore(Number(e.target.value))}
                required
              />
            </label>
            <label>
              Eng Mathematics (Max: 13)
              <input
                type="number"
                min="0"
                max="13"
                value={mathScore}
                onChange={(e) => setMathScore(Number(e.target.value))}
                required
              />
            </label>
            <label>
              Computer Science (Max: 72)
              <input
                type="number"
                min="0"
                max="72"
                width={100}
                value={csScore}
                onChange={(e) => setCsScore(Number(e.target.value))}
                required
              />
            </label>
            <button type="submit" className="btn">Submit</button>
            <button type="button" className="btn cancel" onClick={() => setIsFormVisible(false)}>Close</button>
          </form>
        </div>
      )}

      <div className="charts">
        <div className="chart">
          <h3>Comparison Graph</h3>
          <ResponsiveContainer width="95%" height={350}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="classAverage" stroke="#7ED6DF" name="Class Average" />
              <Line type="monotone" dataKey="userScore" stroke="#82ca9d" name="User Score" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h3>Skill Analysis</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Marks Obtained', value: userScore },
                  { name: 'Remaining', value: 100 - userScore }
                ]}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={130}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={(entry) => `${entry.name} ${entry.value}`}
              >
                <Cell key="cell-0" fill={COLORS[1]} />
                <Cell key="cell-1" fill={COLORS[0]} />
              </Pie>
              <foreignObject x="47%" y="47%" width="100px" height="100px" style={{ transform: 'translate(-35px, -35px)' }}>
                <img src={achievementIcon} width="100px" height="100px" alt="Achievement Icon" />
              </foreignObject>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="horizontal-bars">
        <h3>Subject Percentiles</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart layout="vertical" data={[
            { name: 'General Aptitude', percentile: userAptitudePercentile, fill: '#8884d8' },
            { name: 'Maths', percentile: userMathPercentile, fill: '#82ca9d' },
            { name: 'CS', percentile: userCsPercentile, fill: '#ffc658' },
          ]}>
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentile" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
