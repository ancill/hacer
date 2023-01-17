import { Task } from '../App';
import { ListItem } from './ListItem';

export type ListType = 'Incomplete' | 'Complete';

export const ListContainer = ({ tasks, type }: { tasks: Task[]; type: ListType }) => {
  return (
    <div className="py-4">
      <div className="font-bold text-lg text-gray-700 mb-4">{type}</div>
      <ul>
        {tasks.map((el) => (
          <ListItem key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};
