import { CheckBox } from './CheckBox';
import { Task } from './ListContainer';

export const ListItem = ({ label, isDone }: Task) => {
  return (
    <li className="justify-between">
      <CheckBox isDone={isDone} />
      <label className="inline-block text-gray-800">{label}</label>
    </li>
  );
};
