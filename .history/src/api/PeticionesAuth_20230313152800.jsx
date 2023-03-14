import AxiosInstance from "./Instance"

export const LoginApi=async({email,password})=>{
    try {
        console.log({email,password})
        const usuario = await AxiosInstance.post('auth/login',{email,password})
        return usuario;
    } catch (error) {
        console.log(error)
        return null
    }
}