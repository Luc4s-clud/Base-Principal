import React from 'react';
import './ActivityBox.css';
import { Link } from 'react-router-dom';

const ActivityBox = ({ isHomePage }) => {
  return (
    <div className={`activity-box ${isHomePage ? 'home-page' : ''}`}>
      <h2><Link to="/atividades">Minhas Atividades</Link></h2>
      <ul>
        <li>Você não possui atividades pendentes.</li>
      </ul>
    </div>
  );
};

export default ActivityBox;
