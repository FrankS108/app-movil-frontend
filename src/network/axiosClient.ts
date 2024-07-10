import axios from 'axios'

const axiosClient = axios.create({
    baseURL: `http://localhost:8081`,
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 400) {
            // Manejar específicamente el error 400
            throw new Error('Ha fallado la solicitud al servicio: Error 400');
        } else if (error.response) {
            // Otros errores de respuesta
            return Promise.reject(error.response.data);
        } else {
            // Error de red o timeout
            return Promise.reject({ message: 'Error de red o timeout' });
        }
    }
);

export { axiosClient }