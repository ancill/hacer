import React from 'react';

export const AddButton = ({ setShowModal }: { setShowModal: () => void }) => {
  return (
    <button
      onClick={() => setShowModal(true)}
      className="border-2 h-16 w-16 bg-indigo-600 rounded-full
       font-light text-5xl text-center pb-1 text-white absolute right-4 bottom-8"
    >
      +
    </button>
  );
};
