import React from 'react'
import { CardVencimientosData } from '../interfaces/interfaces'
import ListCardsVencimientos from '../components/ListCardsVencimientos'

const Vencimientos = () => {
    

    let cards: CardVencimientosData[] = [
        {
            "id": 11,
            "expiration": "Licencia",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 748,
            "expiration": "Gafete Unico",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 752,
            "expiration": "Camisas",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 12,
            "expiration": "Visa",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 749,
            "expiration": "Zapatos de seguridad",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 753,
            "expiration": "Chaleco",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 13,
            "expiration": "Apto",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 750,
            "expiration": "Socioeconomico",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 754,
            "expiration": "Grapadora",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 751,
            "expiration": "Carpeta ",
            "date": "",
            "days": "",
            "status": "gris"
        },
        {
            "id": 14,
            "expiration": "Carta de No Antecedentes Penales",
            "date": "2022-03-22",
            "days": "-840",
            "status": "rojo"
        }
    ]
    return (
        <>
            <ListCardsVencimientos cards={cards}/>
        </>
    )
}

export default Vencimientos
