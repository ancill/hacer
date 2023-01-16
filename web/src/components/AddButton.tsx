import React from 'react';

export const AddButton = ({ addTask }: { addTask: () => void }) => {
  return (
    <button
      onClick={() => addTask()}
      className="ml-5 bg-white border-4
     border-green-600 py-2 px-4 font-bold text-xl
     relative text-green-600 "
    >
      Add +
    </button>
  );
};
