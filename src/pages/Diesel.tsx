import { CardDieselData } from '../interfaces/interfaces'
import { ListCardsDiesel } from '../components/ListCardsDiesel'

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
        },
        {
            noEconomico: 456,
            porcentaje: 55,
            cargas: [
                {
                    cargaID: 3,
                    fecha: '2023-03-10',
                    rendimientoCarga: 10.2,
                    rendimientoEsperado: 11.0
                }
            ]
        },
        {
            noEconomico: 789,
            porcentaje: 45,
            cargas: [
                {
                    cargaID: 4,
                    fecha: '2023-04-05',
                    rendimientoCarga: 13.1,
                    rendimientoEsperado: 14.0
                },
                {
                    cargaID: 5,
                    fecha: '2023-05-15',
                    rendimientoCarga: 12.8,
                    rendimientoEsperado: 13.0
                }
            ]
        },
        {
            noEconomico: 101,
            porcentaje: 10,
            cargas: [
                {
                    cargaID: 6,
                    fecha: '2023-06-20',
                    rendimientoCarga: 9.5,
                    rendimientoEsperado: 10.0
                },
                {
                    cargaID: 7,
                    fecha: '2023-07-10',
                    rendimientoCarga: 10.1,
                    rendimientoEsperado: 11.0
                }
            ]
        },
        {
            noEconomico: 202,
            porcentaje: 90,
            cargas: [
                {
                    cargaID: 8,
                    fecha: '2023-08-15',
                    rendimientoCarga: 15.0,
                    rendimientoEsperado: 14.0
                }
            ]
        }
    
    ]
    return (
        <>
            <ListCardsDiesel cards={cardsData}/>
        </>
    )
}
