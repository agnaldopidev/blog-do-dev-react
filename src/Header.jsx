import styles from './Header.module.css';
import igniteLogon from './assets/logotipo.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogon} alt="Logotipo Ignite" />
        </header>
    )
}