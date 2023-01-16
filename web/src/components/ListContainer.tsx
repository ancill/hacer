import { Task } from '../App';
import { ListItem } from './ListItem';

export const ListContainer = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="flex justify-start p-5">
      <ul>
        {tasks.map((el) => (
          <ListItem key={el.id} label={el.label} isDone={el.isDone} />
        ))}
      </ul>
    </div>
  );
};
