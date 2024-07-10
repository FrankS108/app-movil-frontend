// api/nomina.ts

import { axiosClient } from '../axiosClient';
import { CardData } from '../../interfaces/interfaces';

export async function getNomina(date: string , choferID: number): Promise<CardData[]> {
    const params = {
        week: date,
        choferID: choferID,
    };

    try {
        const response = await axiosClient.get<CardData[]>('/nomina', { params });
        return response.data || [];
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
}

function getErrorMessage(error: any): string {
    if (error.response && error.response.data && error.response.data.mensaje) {
        return error.response.data.mensaje;
    } else {
        return 'Error desconocido al obtener las nominas';
    }
}
