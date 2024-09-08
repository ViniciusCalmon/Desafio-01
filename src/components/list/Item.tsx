import { Trash, Check } from "@phosphor-icons/react";

import { ITask } from "../../App.tsx";

import styles from "./Item.module.css";

/**
 * Represents the properties for a Task component.
 *
 * @interface
 * @property {ITask} data - The data object representing a task.
 * @property {Function} removeTask - The function to remove a task by its ID.
 * @property {Function} toggleTaskStatus - The function to toggle the status of a task,
 * taking an object with the task ID and the new status value.
 */
interface Props {
  data: ITask;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

/**
 * Renders an item component that displays a task with the ability to toggle its completion status and remove it.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.data - The data for the task item.
 * @param {string} props.data.id - The unique identifier for the task.
 * @param {string} props.data.text - The text description of the task.
 * @param {boolean} props.data.isChecked - The completion status of the task.
 * @param {function} props.removeTask - Function to remove the task.
 * @param {function} props.toggleTaskStatus - Function to toggle the task's completion status.
 *
 * @return {JSX.Element} The rendered item component.
 */
export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = data.isChecked
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
