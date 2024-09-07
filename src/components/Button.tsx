import styles from './Button.module.css'
import * as React from "react";

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


/**
 * Renders a button component with additional properties.
 *
 * @param {object} props - The properties object passed to the button component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {...object} rest - The additional properties to be spread onto the button element.
 * @return {JSX.Element} A JSX element representing the button.
 */
export function Button({ children, ...rest }: Props) {
    return (
        <button className={styles.container} {...rest}>
            {children}
        </button>
    );
}