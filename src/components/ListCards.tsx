import { CardData, ListCardData } from "../interfaces/interfaces";
import Card from "./Card";
import styles from "../styles/ListCard.module.css"
import { useErrorContext } from "../context/errorContext";
import Message from "./Message";


const ListCards = ({ cards } : ListCardData) => {
  const { errorMessage } = useErrorContext();
  return (
    <div>
      <div className={styles.headerContainer}>
        <h2>Nomina</h2>
        <p className={styles.results}> { cards.length } Resultados</p>
      </div>
      <div className={styles.list}>
        {
          errorMessage && <Message message={errorMessage} isError={true} />
        }
        {
          cards.length > 0 && !errorMessage && cards.map((card: CardData, index: number) => (
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
                  extras={card.extras}
              />
          ))
        }
      </div>
    </div>
  )
}

export default ListCards
