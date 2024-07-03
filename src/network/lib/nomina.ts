import { CardData } from "../../interfaces/interfaces";
import { axiosClient } from "../axiosClient";

export function getNomina(date: string ,choferID: number){
    const params = {
        week: date,
        choferID: choferID,
        dbType: 'noedb'
    };
    return axiosClient.get<CardData[]>('/nomina', {params: params});
}