import { useEffect, useState } from 'react';

import { ListContainer } from './components/ListContainer';
import Modal from './components/Modal';
import { TitleBar } from './components/TitleBar';
import { useFetch } from './useFetch';

// export interface Task {
//   label: string;
//   id?: string;
//   isDone: boolean;
//   category: string;
// }
// const tasks: Task[] = [
//   {
//     label: 'Upload 1099-R to TurboTax',
//     id: '2',
//     isDone: false,
//     category: '💰 Finance',
//   },
//   {
//     label: 'Submit 2019 tax return',
//     id: '4',
//     isDone: false,
//     category: '💞 Wedding',
//   },
//   {
//     label: 'Print parking passes',
//     id: '21',
//     isDone: false,
//     category: '🛒 Shopping List',
//   },
//   {
//     label: 'Sign contract, send back',
//     id: '144',
//     isDone: false,
//     category: '🖥️ Freelance',
//   },
// ];

/**
 * Model Task
 *
 */
export type Task = {
  id: number;
  label: string;
  isDone: boolean;
  categoryId: number | null;
};

/**
 * Model Category
 *
 */
export type Category = {
  id: number;
  title: string;
  emoji: string | null;
};

function App() {
  const [taskList, updateTaskList] = useState<Task[]>();

  const { error, isLoading, response } = useFetch<Task[]>('http://localhost:3001/tasks');

  const onTaskListUpdate = (newTask: Task) => {
    const newTaskList = [...taskList];
    newTaskList[newTaskList.findIndex((el) => el.id === newTask.id)] = newTask;
    updateTaskList(newTaskList);
  };

  useEffect(() => {
    if (response) {
      updateTaskList(response);
    }
  }, [response]);

  if (isLoading) {
    return <div className="bg-slate-500 text-white text-lg">Loading...</div>;
  }

  return (
    <div className="bg-slate-500 py-2">
      <div className="p-4 max-w-md container bg-white rounded-xl overflow-hidden relative">
        <TitleBar />

        <ListContainer
          type="Incomplete"
          tasks={taskList.filter((val) => !val.isDone)}
          updateTask={onTaskListUpdate}
        />
        <ListContainer
          type="Complete"
          updateTask={onTaskListUpdate}
          tasks={taskList.filter((val) => val.isDone)}
        />
        <Modal />
      </div>
    </div>
  );
}

export default App;
