import { useState } from 'react';

import { Task } from '../App';
import { AddButton } from './AddButton';
import { Input } from './Input';

export const AddNewItem = () => {
  const [newTask, addNewTask] = useState('');
  const onTaskAdd = () => {
    console.log(newTask);
  };

  return (
    <div className="ml-3 p-3">
      <Input value={newTask} setValue={addNewTask} />
      <AddButton addTask={onTaskAdd} />
    </div>
  );
};
