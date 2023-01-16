import { useState } from 'react';

export const Input = () => {
  const [value, setValue] = useState('');
  return (
    <input
      className="text-sm font-medium text-gray-900"
      onChange={(event) => setValue(event.target.value)}
      value={value}
    />
  );
};
