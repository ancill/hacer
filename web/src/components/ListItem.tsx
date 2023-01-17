import { Task } from '../App';
import { CheckBox } from './CheckBox';

export const ListItem = ({ isDone, label, id, category }: Task) => {
  const labelVariants = {
    checked: 'text-gray-400',
    unChecked: 'text-gray-700',
  };

  return (
    <li className="flex mb-4">
      <CheckBox isDone={isDone} />
      <div className="flex flex-col pt-1 pl-4">
        <label
          className={`${
            labelVariants[isDone ? 'checked' : 'unChecked']
          } font-medium text-lg`}
        >
          {label}
        </label>
        {!isDone && (
          <label className="text-gray-400 font-semibold text-sm">{category}</label>
        )}
      </div>
    </li>
  );
};
