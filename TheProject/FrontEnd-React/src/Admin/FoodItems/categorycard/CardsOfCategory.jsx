import React from 'react';

const CardsOfCategory = ({categoryname}) => {
  return (
    <div className="w-51 h-62 p-4 py-5 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer m-2 bg-gradient-to-r from-dark to-primary">

  
      <div className="p-4">
        <h2 className="text-4xl text-white font-semibold">{categoryname.name}</h2>
      </div>
    </div>
  );
};

export default CardsOfCategory;

//  //<div className="w-51 h-62 p-4 py-5 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer m-2 bg-primary">