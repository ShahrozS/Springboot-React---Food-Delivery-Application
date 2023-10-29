import React from 'react';

const CardsOfOptions = ({option}) => {
  return (
    <div className="text-center  w-64 h-64 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer bg-primary">
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-4xl text-white font-semibold">{option}</h2>
    </div>
  </div>
  );
};

export default CardsOfOptions;