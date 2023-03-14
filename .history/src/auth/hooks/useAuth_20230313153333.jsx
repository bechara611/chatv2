import Swal from "sweetalert2"
import { LoginApi } from "../../api/PeticionesAuth"

export const useAuth = () => {
    const onLoginUSE = async ({ email, password }) => {
        try {
            const user = await LoginApi({ email, password })
            Swal.fire('Ok', 'Welcome', 'success')
            return user
        } catch (error) {
            return
        }

    }
    return {
        onLoginUSE
    }
}