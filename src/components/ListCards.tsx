import { CardData } from "../interfaces/interfaces";
import Card from "./Card";
import styles from "../styles/ListCard.module.css"

interface ListCards {
    cards: CardData[];
}

const options: string[] = ['All', 'Ok', 'Pendientes', 'Cancelados']


const ListCards = ({ cards } : ListCards) => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h2>Nomina</h2>
        <p className={styles.results}> { cards.length } Resultados</p>
      </div>
      <div className={styles.optionsContainer}>
        {
          options.map((option: string, index: number) => (
            <p key={index} className={styles.optionFilter}>{ option }</p>
          ))
        }
      </div>
      <div className={styles.list}>
        {
          cards.map((card: CardData, index: number) => (
              <Card 
                  key={index}
                  order={card.order}
                  origin={card.origin}
                  destination={card.destination}
                  date={card.date}
                  container={card.container}
                  status={card.status}
                  amount={card.amount}
              />
          ))
        }
      </div>
    </div>
  )
}

export default ListCards
