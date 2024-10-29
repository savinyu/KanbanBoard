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

const priorityImages = [
  priority0,
  priority1,
  priority2,
  priority3,
  priority4,
];

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
    <div className="bg-white shadow-lg rounded-lg p-3 flex flex-col space-y-0.5 relative ">
      <div className="text-gray-500 text-sm font-semibold">{title}</div>
      <div className="flex justify-start space-x-1 text-sm font-semibold text-gray-800">
        <div className='flex space-x-1.5 text-xs'>
          <img className='h-3 w-3 mt-0.5' src={statusImages[status]} alt="status" />
          <div className='mb-1 '>{truncatedDescription}</div>
        </div>
      </div>
      
      <div className="flex justify-start">
        <div className="text-gray-500 border rounded-md py-1 border-gray-300 w-7 flex items-center justify-center mr-3">
          <img src={priorityImages[priority]} alt="priority" />
        </div>
        {tag === "" || tag === " " ? null :
          <div className="bg-white text-gray-600 font-medium pr-1 space-x-0.5 flex justify-center items-center border rounded-md border-gray-300 max-w-44">
            <span className="h-3.5 w-4"><img src={dot} alt="dot" /></span>
            <span className="text-slate-500 text-xs">{tag}</span>
          </div>}
      </div>
    </div>
  );
}
