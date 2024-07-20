import React, { createContext, useContext, useState } from "react";
import { CargaDieselCardData, FormularioDieselToSend, MetodoPago, Proveedor, TipoCombustible } from "../interfaces/interfaces";
import { useErrorContext } from '../context/errorContext';
import { getVistaDiesel, saveDiesel } from '../network/lib/diesel'
import { useNotificationContext } from "./notificationContext";

interface DieselContextType {
    proveedores: Proveedor[];
    metodosPagos: MetodoPago[];
    tipoCombustibles: TipoCombustible[];
    camionId: number;
    noEconomico: number;
    tanqueActual: number;
    cargasDiesel: CargaDieselCardData[];
    getDieselInformation: () => Promise<void>;
    saveDieselData: (data: FormularioDieselToSend) => Promise<void>;
}


const DieselContext = createContext<DieselContextType | undefined>(undefined);

export const useDieselContext = () => {
    const context = useContext(DieselContext);
    if(!context){
        throw new Error('useDieselContext must be used within an DieselContextProvider');
    }

    return context;
}


const DieselContextProvider : React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [ proveedores, setProveedores ] = useState<Proveedor[]>([]);
    const [ metodosPagos, setMetodosPagos ] = useState<MetodoPago[]>([]);
    const [ tipoCombustibles, setTipoCombustibles ] = useState<TipoCombustible[]>([]); 
    const [ cargasDiesel, setCargasDiesel ] = useState<CargaDieselCardData[]>([]);
    const [ camionId, setCamionId ] = useState<number>(0);
    const [ noEconomico, setNoEconomico ] = useState<number>(0);
    const [ tanqueActual, setTanqueActual ] = useState<number>(0);
    const { setError, clearError } = useErrorContext();

    const { addNotification } = useNotificationContext();

    const getDieselInformation = async() => {
        try {
            const data = await getVistaDiesel(5); // Aquí usamos await correctamente dentro de una función async
            console.log(data);
            if(data){
                setProveedores(data.proveedores);
                setMetodosPagos(data.metodosPagos);
                setTipoCombustibles(data.tipoCombustibles);
                setCamionId(data.camionId);
                setNoEconomico(data.noEconomico);
                setTanqueActual(data.tanqueActual);
                setCargasDiesel(data.cargasDiesel);
            }
            addNotification('success', 'Se ha obtenido la informacion correctamente');
            clearError(); // Limpiar cualquier error previo al obtener los datos correctamente
        } catch (error) {
            addNotification('error', 'Ha ocurrido un problema y no se pudo obtener la informacion');
            if (typeof error === 'string') {
              setError(error);
            } else if (error instanceof Error) {
              setError(error.message);
            } else {
              setError('Error desconocido'); // Manejo de cualquier otro tipo de error
            }  
        }
    }

    const saveDieselData = async(data: FormularioDieselToSend) => {
        try{
            await saveDiesel(data);
            addNotification('success', 'Se ha guardado correctamente');
            clearError();
        } catch( error ) {
            addNotification('error', 'No se ha podido guardar');
        }
    }


    const contextValue: DieselContextType = {
        proveedores,
        metodosPagos,
        tipoCombustibles,
        camionId,
        noEconomico,
        tanqueActual,
        cargasDiesel,
        getDieselInformation,
        saveDieselData
    };


    return (
        <DieselContext.Provider value={contextValue}>
            { children }
        </DieselContext.Provider>
    )

}


export default DieselContextProvider;