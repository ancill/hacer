import { Task } from '../App';
import { ListItem } from './ListItem';

export type ListType = 'Incomplete' | 'Complete';

export const ListContainer = ({
  tasks,
  type,
  updateTask,
}: {
  tasks?: Task[];
  type: ListType;
  updateTask: (newTask: Task) => void;
}) => {
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
