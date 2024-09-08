import styles from "./Input.module.css";

export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className={styles.container}
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}

//Input é uma função que recebe um objeto de propriedades (props).

// As propriedades são desestruturadas utilizando o operador spread ...rest,
// significando que todas as propriedades passadas ao componente Input serão incluídas no objeto rest.

// O tipo das propriedades esperadas é definido usando React.DetailedHTMLProps
// com React.InputHTMLAttributes<HTMLInputElement> e HTMLInputElement.
// Isso significa que todas as propriedades padrão de um elemento <input> HTML
// são aceitas por este componente.