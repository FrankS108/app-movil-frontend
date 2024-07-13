import { CardDieselData, ListcardsDieselData } from "../interfaces/interfaces";
import { useErrorContext } from "../context/errorContext";
import Message from "./Message";
import styles from "../styles/ListCardDiesel.module.css"
import { CardDiesel } from "./CardDiesel";


export const ListCardsDiesel = ({ cards } : ListcardsDieselData) => {
  const { errorMessage } = useErrorContext();

  return (
    <div>
      <div className={styles.headerContainer}>
        <h2>Diesel</h2>
        <p className={styles.results}> { cards.length } Resultados</p>
      </div>
      <div className={styles.list}>
        {
          errorMessage && <Message message={errorMessage} isError={true} />
        }
        {
          cards.length > 0 && !errorMessage && cards.map((card: CardDieselData, index: number) => (
              <CardDiesel 
                key={index}
                noEconomico={card.noEconomico} 
                porcentaje={card.porcentaje}
                cargas={card.cargas}
              />
          ))
        }
      </div>
    </div>
  )
}
