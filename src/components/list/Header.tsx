import styles from "./Header.module.css";

/**
 * This interface represents properties related to tasks and their states.
 * It includes the total number of tasks and the count of checked tasks.
 *
 * @property {number} tasksCounter - The total number of tasks.
 * @property {number} checkedTasksCounter - The number of tasks that have been checked or completed.
 */
interface Props {
  tasksCounter: number;
  checkedTasksCounter: number;
}

/**
 * Header component displays the total number of tasks and the number of checked tasks.
 *
 * @param {Object} props - The component props.
 * @param {number} props.tasksCounter - The total number of tasks.
 * @param {number} props.checkedTasksCounter - The number of checked (completed) tasks.
 * @return {JSX.Element} The rendered Header component.
 */
export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  );
}
