import { useEffect, useState } from 'react';
import { Task } from '../App';
import { mutate } from '../mutate';

import { ListItem } from './ListItem';

export type ListType = 'Incomplete' | 'Complete';
export type Task = {
  id: number;
  label: string;
  isDone: boolean;
  categoryId: number | null;
  Category: Category;
};
export type Category = {
  id: number;
  title: string;
  emoji: string | null;
};

export const ListContainer = () => {
  const [taskList, updateTaskList] = useState<Task[]>();
  const [isUpdated, setUpdate] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then((res) => res.json())
      .then((res) => {
        updateTaskList(res);
      });
  }, [isUpdated]);

  const updateTask = async (newTask: Task) => {
    const taskToUpdate = {
      label: newTask.label,
      isDone: newTask.isDone,
      categoryId: newTask.categoryId,
    };
    const res = await mutate(
      'PUT',
      'http://localhost:3001/task' +
        '?' +
        new URLSearchParams({ id: newTask.id.toString() }),
      taskToUpdate,
    );
    if (res) setUpdate(!isUpdated);
  };

  if (!taskList) {
    return <div className="bg-slate-500 text-white text-lg">Loading...</div>;
  }

  const separateByType = (el: Task, type: ListType) =>
    (el.isDone && type === 'Complete') || (!el.isDone && type === 'Incomplete');

  const List = ({ type }: { type: ListType }) => {
    return (
      <div className="py-4">
        <div className="font-bold text-lg text-gray-700 mb-4">{type}</div>
        <ul>
          {taskList?.map((el) => {
            const isShow = separateByType(el, type);
            return (
              isShow && (
                <ListItem
                  key={el.id}
                  task={el}
                  onItemUpdate={(newTask) => updateTask(newTask)}
                />
              )
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <>
      <List type="Incomplete" />
      <List type="Complete" />
    </>
  );
};
