import { CardVencimientosData } from '../interfaces/interfaces';
import styles from '../styles/CardVencimientos.module.css';


const CardVencimientos = ({ id, expiration, date, days, status }: CardVencimientosData) => {

    const statusClass = styles[`status-${status}`];
    console.log(statusClass);
    return (
        <div className={`${statusClass}`}>
            <div className={styles.card}>
                <div className={styles.information}>
                    <p className={styles.id}>{ id }</p>
                    <p className={styles.date}>{ date }</p>
                </div>
                <p className={styles.expiration}>{ expiration }</p>
                { days && <p className={styles.days}>{ days } DIAS</p>}
                { !days && <p className={styles.days}>-</p> }
            </div>
        </div>
    )
}

export default CardVencimientos
