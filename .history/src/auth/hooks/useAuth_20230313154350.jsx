import Swal from "sweetalert2"
import AxiosInstance from "../../api/Instance"


export const useAuth = () => {
    const onLoginUSE = async ({ email, password }) => {
        try {
            const usuario = await AxiosInstance.post('auth/login', { email, password })
         //   Swal.fire('Ok', 'Welcome', 'success')
            return usuario
        } catch (error) {
        let errorString = JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
        Swal.fire('Error', errorString, 'error')
        return {data:null}
        }

    }
    return {
        onLoginUSE
    }
}