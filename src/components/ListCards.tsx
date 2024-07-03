import { CardData, ListCardData } from "../interfaces/interfaces";
import Card from "./Card";
import styles from "../styles/ListCard.module.css"


const ListCards = ({ cards } : ListCardData) => {

  return (
    <div>
      <div className={styles.headerContainer}>
        <h2>Nomina</h2>
        <p className={styles.results}> { cards.length } Resultados</p>
      </div>
      <div className={styles.list}>
        {
          cards.map((card: CardData, index: number) => (
              <Card 
                  key={index}
                  id={card.id}
                  route={card.route}
                  date={card.date}
                  payment={card.payment}
                  container={card.container}
                  truck={card.truck}
                  amount={card.amount}
                  status={card.status}
              />
          ))
        }
      </div>
    </div>
  )
}

export default ListCards
