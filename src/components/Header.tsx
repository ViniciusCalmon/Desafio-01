import styles from './Header.module.css'

/**
 * Header component that renders the application's header, including the logo.
 *
 * @return {JSX.Element} The rendered header element with a logo.
 */
export function Header() {
    return (
        <header className={styles.container}>
            <img src="/assets/logo.svg" alt="logo da aplicação" />
        </header>
    )
}

// Este arquivo CSS está utilizando CSS Modules, permitindo que os
// estilos sejam encapsulados e acessíveis via o objeto styles.