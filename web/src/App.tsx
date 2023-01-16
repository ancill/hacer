import { useState } from 'react';

import { AddNewItem } from './components/AddNewItem';
import { ListContainer } from './components/ListContainer';
import { TitleBar } from './components/TitleBar';

export interface Task {
  label: string;
  id?: string;
  isDone: boolean;
}
const tasks: Task[] = [
  {
    label: 'Pasta',
    id: '2',
    isDone: false,
  },
  {
    label: 'Pizza',
    id: '1',
    isDone: true,
  },
];

function App() {
  const [task, addTask] = useState();

  return (
    <div className="bg-slate-500">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <TitleBar />
        <ListContainer tasks={tasks} />
        <AddNewItem />
      </div>
    </div>
  );
}

export default App;
