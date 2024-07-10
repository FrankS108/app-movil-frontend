import { useState, useEffect } from 'react';
import { CardData } from '../interfaces/interfaces';
import ListCards from '../components/ListCards';
import { getNomina } from '../network/lib/nomina';
import { useErrorContext } from '../context/errorContext';

const Nomina = () => {
    const [cardsData, setData] = useState<CardData[]>([]);
    const { setError, clearError } = useErrorContext();

    useEffect(() => {
        
      const fetchNominas = async () => {
        try {
            const nominasData = await getNomina('2024-07-09', 123); // Aquí usamos await correctamente dentro de una función async
            if(nominasData){
              setData(nominasData);
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

    fetchNominas();
    }, []);

    return (
        <>
            <ListCards cards={cardsData} />
        </>
    )
}

export default Nomina
