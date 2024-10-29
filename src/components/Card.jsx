import React from 'react';
import dot from '../../public/assets/dot.svg';
import priority0 from '../../public/assets/priority0.svg';
import priority1 from '../../public/assets/priority1.svg';
import priority2 from '../../public/assets/priority2.svg';
import priority3 from '../../public/assets/priority3.svg';
import priority4 from '../../public/assets/priority4.svg';
import done from '../../public/assets/done.svg';
import todo from '../../public/assets/todo.svg';
import backlog from '../../public/assets/backlog.svg';
import inprogress from '../../public/assets/inprogress.svg';

const priorityImages = [priority0, priority1, priority2, priority3, priority4];
const statusImages = {
  "Backlog": backlog,
  "Done": done,
  "In progress": inprogress,
  "Todo": todo,
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'; 
  }
  return text;
};

export const Card = ({ title, description, priority, status, tag }) => {
  const truncatedDescription = truncateText(description, 70); 

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-description">
        <img className="status-icon" src={statusImages[status]} alt="status" />
        <div className="description-text">{truncatedDescription}</div>
      </div>
      
      <div className="card-footer">
        <div className="priority">
          <img src={priorityImages[priority]} alt="priority" />
        </div>
        {tag && (
          <div className="tag">
            <img className="tag-icon" src={dot} alt="dot" />
            <span className="tag-text">{tag}</span>
          </div>
        )}
      </div>
    </div>
  );
}
