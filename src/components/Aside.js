import styles from './css/Aside.module.css';

function Aside() {
    return (
        <aside className={styles.aside}>
            <h2>Aside Section</h2>
            <p>This is some additional information and links.</p>
        </aside>
    );
}

export default Aside;
