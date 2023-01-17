import React from 'react';
import './Note.css';

const Note = () => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__date">01 . 05 . 2022</div>
        <div className="card__info">
          <h3>NOTE</h3>
        </div>
      </div>
    </div>
  );
};

export default Note;
