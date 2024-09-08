import styles from "./Empty.module.css";

/**
 * Renders an empty state component indicating no tasks have been created.
 *
 * @return {JSX.Element} A JSX element representing the empty state.
 */
export function Empty() {
  return (
    <div className={styles.container}>
      <img src="/assets/clipboard.png" alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
