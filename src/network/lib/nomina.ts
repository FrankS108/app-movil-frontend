import { axiosClient } from "../axiosClient";

export function getNomina(){
    return axiosClient.get('/nomina');
}