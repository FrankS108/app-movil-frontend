import { CardVencimientosData, ListCardsVencimientosData } from '../interfaces/interfaces'
import CardVencimientos from './CardVencimientos'
import styles from '../styles/ListCardVencimientos.module.css'

const ListCardsVencimientos = ({ cards } : ListCardsVencimientosData) => {
  return (
    <div>
        <div className={styles.headerContainer}>
        <h2>Vencimientos</h2>
            <p className={styles.results}> { cards.length } Resultados</p>
        </div>
        <div className={styles.list}>
            {
                cards.length > 0 && cards.map((card: CardVencimientosData, index: number) => (
                    <CardVencimientos
                        key={index}
                        id={card.id}
                        expiration={card.expiration}
                        date={card.date}
                        days={card.days}
                        status={card.status}
                    />
                ))
            }
        </div>
        
    </div>
  )
}

export default ListCardsVencimientos
