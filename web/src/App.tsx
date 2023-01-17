import { useState } from 'react';

import { AddNewItem } from './components/AddNewItem';
import { Divider } from './components/Divider';
import { ListContainer } from './components/ListContainer';
import { TitleBar } from './components/TitleBar';
import { AddButton } from './components/AddButton';

export interface Task {
  label: string;
  id?: string;
  isDone: boolean;
  category: string;
}
const tasks: Task[] = [
  {
    label: 'Upload 1099-R to TurboTax',
    id: '2',
    isDone: false,
    category: '💰 Finance',
  },
  {
    label: 'Submit 2019 tax return',
    id: '1',
    isDone: false,
    category: '💞 Wedding',
  },
  {
    label: 'Print parking passes',
    id: '1',
    isDone: false,
    category: '🛒 Shopping List',
  },
  {
    label: 'Sign contract, send back',
    id: '1',
    isDone: false,
    category: '🖥️ Freelance',
  },
];

function App() {
  const addTask = () => console.log('pressed');

  return (
    <div className="bg-slate-500">
      <div className="p-4 max-w-md container bg-white rounded-xl overflow-hidden relative">
        <TitleBar />
        <ListContainer type="Incomplete" tasks={tasks} />
        <ListContainer
          type="Complete"
          tasks={tasks.map((el) => ({ ...el, isDone: true }))}
        />
        <AddButton addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
