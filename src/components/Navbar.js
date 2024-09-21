import styles from './css/Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles['nav-menu']}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
