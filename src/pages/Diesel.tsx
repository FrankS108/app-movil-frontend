import { CardDiesel } from '../components/CardDiesel'
import FormularioDiesel from '../components/FormularioDiesel'
import styles from '../styles/Diesel.module.css'
import ListCargasDiesel from '../components/ListCargasDiesel'
import { useDieselContext } from '../context/dieselContext'
import { useEffect } from 'react';


export const Diesel = () => {
    const { 
        getDieselInformation, 
        noEconomico, 
        tanqueActual,
        camionId,
        proveedores,
        metodosPagos,
        tipoCombustibles,
        cargasDiesel
    } = useDieselContext();
    
    useEffect(() => {
        getDieselInformation();
    }, []);

    return (
        <div className={styles.diesel}>
            <CardDiesel noEconomico={noEconomico} tanqueActual={tanqueActual} camionId={camionId}/>
            <FormularioDiesel proveedores={proveedores} metodosPago={metodosPagos} tiposCombustible={tipoCombustibles}/>
            { cargasDiesel && <ListCargasDiesel cards={cargasDiesel}/> }
        </div>
    )
}
