import { DieselData} from '../interfaces/interfaces'
import { CardDiesel } from '../components/CardDiesel'
import FormularioDiesel from '../components/FormularioDiesel'
import styles from '../styles/Diesel.module.css'
import ListCargasDiesel from '../components/ListCargasDiesel'
import { getVistaDiesel } from '../network/lib/diesel'
import { useState, useEffect } from 'react'
import { useErrorContext } from '../context/errorContext';


export const Diesel = () => {
    const [data, setData] = useState<DieselData>({} as DieselData);
    const { setError, clearError } = useErrorContext();

    useEffect(() => {
        
        const fetchDiesel = async () => {
            try {
                const data = await getVistaDiesel(5); // Aquí usamos await correctamente dentro de una función async
                if(data){
                    console.log(data);
                    setData(data);
                }
                clearError(); // Limpiar cualquier error previo al obtener los datos correctamente
            } catch (error) {
                if (typeof error === 'string') {
                setError(error);
                } else if (error instanceof Error) {
                setError(error.message);
                } else {
                setError('Error desconocido'); // Manejo de cualquier otro tipo de error
                }       
            }
        };

        fetchDiesel();
    }, []);

    return (
        <div className={styles.diesel}>
            <CardDiesel noEconomico={data.noEconomico} tanqueActual={data.tanqueActual} camionId={data.camionId}/>
            <FormularioDiesel/>
            { data.cargasDiesel && <ListCargasDiesel cards={data.cargasDiesel}/>}
        </div>
    )
}
