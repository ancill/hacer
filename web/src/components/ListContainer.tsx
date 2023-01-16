import { ListItem } from './ListItem';

export interface Task {
  label: string;
  id?: string;
  isDone: boolean;
}

export const ListContainer = () => {
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

  return (
    <ul>
      {tasks.map((el) => (
        <ListItem key={el.id} label={el.label} isDone={el.isDone} />
      ))}
    </ul>
  );
};
