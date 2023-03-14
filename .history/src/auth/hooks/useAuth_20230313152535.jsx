import { LoginApi } from "../../api/PeticionesAuth"

export const useAuth = ()=>{
    const onLoginUSE=async({email,password})=>{
        const user= await LoginApi(email,password)
        return user
    }
    return{
        onLoginUSE
    }
}