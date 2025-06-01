//manages visual progress tracking for quiz completion.

import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ answeredCount, total }) => {
  return (
    <div className="progress-container">
      <p className="progress-text">{answeredCount} / {total} answered</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(answeredCount / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
