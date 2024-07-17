import styles from "../styles/ListCargasDiesel.module.css"
import { CardCargaDiesel } from './CardCargaDiesel';
import { CargaDieselCardData } from '../interfaces/interfaces';
import { ListCargasDieselData } from '../interfaces/interfaces'

const ListCargasDiesel = ({
 cards
} : ListCargasDieselData) => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h2>Historial De Cargas</h2>
        <p className={styles.results}> { cards.length } Resultados</p>
      </div>
      <div className={styles.list}>
        {
          cards.length > 0 ? cards.map((card: CargaDieselCardData, index: number) => (
              <CardCargaDiesel 
                  key={index}
                  cargaID={card.cargaID}
                  fecha={card.fecha}
                  rendimientoCarga={card.rendimientoCarga}
                  rendimientoEsperado={card.rendimientoEsperado}
              />
          )) : <p>No hay registros</p>
        }
      </div>
    </div>
  )
}

export default ListCargasDiesel