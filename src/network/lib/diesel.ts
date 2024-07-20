// api/nomina.ts

import { axiosClient } from '../axiosClient';
import { DieselData, FormularioDieselToSend } from '../../interfaces/interfaces';

export async function getVistaDiesel(choferID: number): Promise<DieselData> {
    const params = {
        choferId: choferID,
        dbType: 'noedb'
    };

    try {
        const response = await axiosClient.get<DieselData>('/diesel', { params });
        return response.data || [];
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
}


export async function saveDiesel(data: FormularioDieselToSend): Promise<void> {
    try {
        await axiosClient.post<FormularioDieselToSend>('/cargasDiesel/insertarCarga', data );
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
}

function getErrorMessage(error: any): string {
    if (error.response && error.response.data && error.response.data.mensaje) {
        return error.response.data.mensaje;
    } else {
        return 'Error desconocido al obtener las cargas diesel';
    }
}
