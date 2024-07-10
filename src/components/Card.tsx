import { CardData, Extra } from "../interfaces/interfaces"
import { getStatusText } from "../utils/status"
import styles from  '../styles/Card.module.css'

const Card = ( { 
    id,
    route,
    date,
    container,
    amount,
    status,
    extras
} : CardData ) => {

    const statusText = getStatusText(status);
    const statusClass = styles[`status-${status}`]; // Obtener la clase de color dinámica
    return (
        <div className={styles.card}>
            <div className={styles.orderAndStatusContainer}>
                <p className={styles.orderTextColor}>#{ id }</p>
                <p className={`${statusClass} ${styles['status']}` }> { statusText }</p>
            </div>
            <div className={styles.route}>
                <p className={styles.routeTextColor}><span>{ route }</span></p>
                <div className={styles.extraInformationContainer}>
                    <p className={styles.extraInformation}>{date}</p>
                    <p className={styles.extraInformation}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M236.4 70.65L130.2 40.31a8 8 0 0 0-3.33-.23L21.74 55.1A16.08 16.08 0 0 0 8 70.94v114.12a16.08 16.08 0 0 0 13.74 15.84l105.13 15a8.5 8.5 0 0 0 1.13.1a8 8 0 0 0 2.2-.31l106.2-30.34A16.07 16.07 0 0 0 248 170V86a16.07 16.07 0 0 0-11.6-15.35M96 120H80V62.94l40-5.72v141.56l-40-5.72V136h16a8 8 0 0 0 0-16M24 70.94l40-5.72V120H48a8 8 0 0 0 0 16h16v54.78l-40-5.72Zm112 126.45V58.61L232 86v84Z"/></svg>
                        
                        {container}</p>
                </div>
            </div>
            {
                extras?.length ?  extras.map((extra: Extra, index: number) => (
                    <div key={index} className={styles.extrasContainer}>
                        <p className={styles.extrasText}>{ extra.name } - ${ extra.m0 | extra.m1 } - { extra.divisa }</p>
                    </div>
                )) : null
            }
            <div className={styles.detailsContainer}>
                <p className={styles.amount}>${amount}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 12 24"><path fill="#545454" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/></svg>            </div>
        </div>
    )
}

export default Card

