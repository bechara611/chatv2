import Swal from "sweetalert2";
import AxiosInstance from "./Instance"

export const LoginApi=async({email,password})=>{
    try {
        const usuario = await AxiosInstance.post('auth/login',{email,password})
        return usuario;
    } catch (error) {
        console.log(error)
        let errorString = JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
        Swal.fire('Error', errorString, 'error')
        return error
      
    }
}