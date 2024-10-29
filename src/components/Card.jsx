import React from 'react';

const priorityImages = ['/assets/priority0.svg', '/assets/priority1.svg', '/assets/priority2.svg', '/assets/priority3.svg', '/assets/priority4.svg'];
const statusImages = {
  "Backlog": '/assets/backlog.svg',
  "Done": '/assets/done.svg',
  "In progress": '/assets/inprogress.svg',
  "Todo": '/assets/todo.svg',
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
            <img className="tag-icon" src={'/assets/Dot.svg'} alt="dot" />
            <span className="tag-text">{tag}</span>
          </div>
        )}
      </div>
    </div>
  );
}
