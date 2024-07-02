import { CardData } from "../interfaces/interfaces"
import { getStatusText } from "../utils/status"
import styles from  '../styles/Card.module.css'

const Card = ( { 
    order,
    origin,
    destination,
    date,
    container,
    status,
    amount,
} : CardData ) => {

    const statusText = getStatusText(status);
    const statusClass = styles[`status-${statusText.toLowerCase().replace(' ', '-')}`]; // Obtener la clase de color dinámica

    return (
        <div className={styles.card}>
            <div className={styles.orderAndStatusContainer}>
                <p className={styles.orderTextColor}>#{ order }</p>
                <p className={`${statusClass} ${styles['status']}` }> { statusText }</p>
            </div>
            <div className={styles.route}>
                <p className={styles.routeTextColor}><span>{origin}</span> - <span>{destination}</span></p>
                <div className={styles.extraInformationContainer}>
                    <p className={styles.extraInformation}>{date}</p>
                    <p className={styles.extraInformation}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M236.4 70.65L130.2 40.31a8 8 0 0 0-3.33-.23L21.74 55.1A16.08 16.08 0 0 0 8 70.94v114.12a16.08 16.08 0 0 0 13.74 15.84l105.13 15a8.5 8.5 0 0 0 1.13.1a8 8 0 0 0 2.2-.31l106.2-30.34A16.07 16.07 0 0 0 248 170V86a16.07 16.07 0 0 0-11.6-15.35M96 120H80V62.94l40-5.72v141.56l-40-5.72V136h16a8 8 0 0 0 0-16M24 70.94l40-5.72V120H48a8 8 0 0 0 0 16h16v54.78l-40-5.72Zm112 126.45V58.61L232 86v84Z"/></svg>
                        
                        {container}</p>
                </div>
            </div>
            
            <p className={styles.amount}>${amount}</p>
        </div>
    )
}

export default Card

