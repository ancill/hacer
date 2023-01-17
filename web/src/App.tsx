import { useState } from 'react';

import { ListContainer } from './components/ListContainer';
import Modal from './components/Modal';
import { TitleBar } from './components/TitleBar';

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
    id: '4',
    isDone: false,
    category: '💞 Wedding',
  },
  {
    label: 'Print parking passes',
    id: '21',
    isDone: false,
    category: '🛒 Shopping List',
  },
  {
    label: 'Sign contract, send back',
    id: '144',
    isDone: false,
    category: '🖥️ Freelance',
  },
];

function App() {
  const addTask = () => console.log('pressed');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-slate-500">
      <div className="p-4 max-w-md container bg-white rounded-xl overflow-hidden relative">
        <TitleBar />
        <ListContainer type="Incomplete" tasks={tasks} />
        <ListContainer
          type="Complete"
          tasks={tasks.map((el) => ({ ...el, isDone: true }))}
        />
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default App;
