import styles from "../styles/Present.module.css";

export default function Present() {
    return (
        <div className={styles.present}> 
            <div className={styles.cover}></div>
            <div className={styles.body}></div>
            <div className={styles.tie1}></div>
            <div className={styles.tie2}></div>
        </div>
    )
}