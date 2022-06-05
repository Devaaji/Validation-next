import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api-validation-depdep.herokuapp.com/api/',
});

export default axiosInstance;