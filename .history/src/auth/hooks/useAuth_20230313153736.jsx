import Swal from "sweetalert2"
import { LoginApi } from "../../api/PeticionesAuth"

export const useAuth = () => {
    const onLoginUSE = async ({ email, password }) => {
        try {
            const user = await LoginApi({ email, password })
         //   Swal.fire('Ok', 'Welcome', 'success')
            return user
        } catch (error) {
            console.log(error)
            console.log('error')
        let errorString = JSON.stringify(error?.response?.data?.errores?.errors[0].msg) || 'PLEASE, CHECK YOUR INFORMATION'
        Swal.fire('Error', errorString, 'error')
        }

    }
    return {
        onLoginUSE
    }
}