import React from 'react';
import plane from '../images/plane.png';

const Trial = () => {
  return (
    <>
      <div className="relative min-h-screen bg-blue-100">
        <img className="absolute bottom-0 right-0 z-20" src={plane} />
      </div>
      <div className="h-40 bg-red-500">hi</div>
    </>
  );
};

export default Trial;
