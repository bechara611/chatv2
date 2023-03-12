import axios from "axios";

 const AxiosInstance = axios.create({
    baseURL:process.env.REACT_APP_BACKEND
})
AxiosInstance.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'token': localStorage.getItem('token') || undefined
    }
    return config
})

export default AxiosInstance;