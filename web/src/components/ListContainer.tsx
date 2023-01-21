import { Task } from '../App';
import { mutate } from '../mutate';
import useFetch from '../useFetch';
import { ListItem } from './ListItem';

export type ListType = 'Incomplete' | 'Complete';

export const ListContainer = ({
  tasks,
  type,
  onUpdated,
}: {
  tasks?: Task[];
  type: ListType;
  onUpdated: (res: Task) => void;
}) => {
  const updateTask = async (newTask: Task) => {
    const res = await mutate(
      'PUT',
      'http://localhost:3001/task' +
        '?' +
        new URLSearchParams({ id: newTask.id.toString() }),
      {
        ...newTask,
      },
    );
    if (res) onUpdated(res);
  };
  return (
    <div className="py-4">
      <div className="font-bold text-lg text-gray-700 mb-4">{type}</div>
      <ul>
        {tasks?.map((el) => (
          <ListItem
            key={el.id}
            task={el}
            onItemUpdate={(newTask) => updateTask(newTask)}
          />
        ))}
      </ul>
    </div>
  );
};
