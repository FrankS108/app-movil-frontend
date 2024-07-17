import { CardDieselData, ListcardsDieselData } from '../interfaces/interfaces'
import { ListCardsDiesel } from '../components/ListCardsDiesel'
import FormularioDiesel from '../components/FormularioDiesel'
import styles from '../styles/Diesel.module.css'
import ListCargasDiesel from '../components/ListCargasDiesel'

export const Diesel = () => {
    let cardsData: CardDieselData[] = [
        {
            noEconomico: 123,
            porcentaje: 80,
            cargas: [
                {
                    cargaID: 1,
                    fecha: '2023-01-15',
                    rendimientoCarga: 12.5,
                    rendimientoEsperado: 13.0
                },
                {
                    cargaID: 2,
                    fecha: '2023-02-20',
                    rendimientoCarga: 11.8,
                    rendimientoEsperado: 12.0
                }
            ]
        }
    
    ]
    return (
        <div className={styles.diesel}>
            <ListCardsDiesel cards={cardsData}/>
            <FormularioDiesel/>
            <ListCargasDiesel cards={cardsData[0].cargas} />
        </div>
    )
}
