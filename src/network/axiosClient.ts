import axios from 'axios'

const axiosClient = axios.create({
    baseURL: `http://localhost:8081`,

});

axiosClient.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
        // Si hay un error en la respuesta
        if (error.response && error.response.status === 401) {
            console.log("Error 401: No autorizado");
            // Aquí puedes manejar el error 401 de manera específica, como redirigir a una página de inicio de sesión
        } else if (error.response) {
            console.log("Error en la respuesta:", error.response.status);
        } else {
            console.log("Error genérico:", error.message);
        }
        // Rechazar la promesa para pasar el control al siguiente catch
        return Promise.reject(error);
    }
)

export { axiosClient }