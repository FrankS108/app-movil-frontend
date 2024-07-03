import axios from 'axios'

const axiosClient = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
        let res = error.response;
        if(res.status == 401){
            console.log("Error");
        }

        console.log("Error");
        return Promise.reject(error);
    }
)

export { axiosClient }