import { Task } from '../App';
import { CheckBox } from './CheckBox';
interface ListItemProps {
  task: Task;
  onItemUpdate: (newTask: Task) => void;
}
export const ListItem = (props: ListItemProps) => {
  const { onItemUpdate, task } = props;
  const onCheckBoxPress = (value: boolean) => {
    const newTask: Task = { ...task, isDone: value };
    onItemUpdate(newTask);
  };

  const labelVariants = {
    checked: 'text-gray-400',
    unChecked: 'text-gray-700',
  };

  const { category, isDone, label } = task;
  return (
    <li className="flex mb-4">
      <CheckBox isDone={isDone} onChange={onCheckBoxPress} />
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
