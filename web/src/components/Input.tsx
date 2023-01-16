import { useState } from 'react';

export const Input = ({ value, setValue }: any) => {
  return (
    <>
      <input
        className="text-sm font-medium text-gray-900 border-4 border-black"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </>
  );
};
