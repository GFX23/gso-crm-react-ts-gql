import React from 'react';
import './LoadingAnimations.css'; // Adjust the path to your CSS file

const Loader: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block">
      <div className="h-10 w-1.5 bg-blue-300 relative left-[-180px] animate-movePaddleOne"></div>
      <div className="h-10 w-1.5 bg-blue-300 relative left-5 animate-movePaddleTwo"></div>
      <div className="relative h-2 w-2 rounded-full bg-blue-300 animate-moveBall"></div>
    </div>
  );
};

export default Loader;