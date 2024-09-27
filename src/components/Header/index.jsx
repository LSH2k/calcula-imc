import styles from './Header.module.css';

const Header = () => {
    return (
    <header className={`${styles.header} text-center p-3 rounded-3`}>
        <h1>Cálculo IMC</h1>
    </header>
    )
}

export default Header