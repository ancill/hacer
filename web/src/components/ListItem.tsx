import { CheckBox } from './CheckBox';
import { Task } from './ListContainer';

export const ListItem = ({ label, isDone }: Task) => {
  return (
    <li>
      <CheckBox isDone={isDone} />
      {label}
    </li>
  );
};
