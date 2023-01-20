import { useEffect, useState } from 'react';

const formatDate = function () {
  // Create a date object from the timestamp
  const date = new Date();

  // Create a list of names for the months
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // return a formatted date
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};

export const TitleBar = () => {
  const date = formatDate();
  console.log(date);
  return (
    <div className="flex flex-col items-start border-b-2 pb-4">
      <div className="tracking-wide text-3xl font-bold text-black">{date}</div>
      <div className="mt-2 font-semibold text-sm text-gray-600">
        5 incomplete, 5 completed
      </div>
    </div>
  );
};
