import React from 'react';

export const CheckBox = ({ isDone }: { isDone: boolean }) => {
  return (
    <input
      className="appearance-none h-6 w-6 border-2 border-gray-400 rounded-md bg-white
       checked:bg-blue-600 checked:border-blue-600 
       focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
      type="checkbox"
      id="checkbox-one"
      title="checkbox"
      checked={isDone}
    />
  );
};
