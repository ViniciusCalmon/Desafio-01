import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

import styles from "./App.module.css";

import { Button } from "./components/Button.tsx";
import { Header } from "./components/Header.tsx";
import { Input } from "./components/Input.tsx";
import { Empty } from "./components/List/Empty.tsx";
import { Header as ListHeader } from "./components/List/Header.tsx";
import { Item } from "./components/List/Item.tsx";

/**
 * The ITask interface represents a task with an ID, description, and completion status.
 *
 * @property {number} id - Unique identifier for the task.
 * @property {string} text - Description or details of the task.
 * @property {boolean} isChecked - Indicates whether the task has been completed.
 */
export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

/**
 * The `App` component manages a list of tasks, providing functionality to add, remove, and toggle task completion status.
 *
 * @return The main component structure which includes the header, input for task creation, buttons, and the task list (which can display tasks or an empty state).
 */
export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
