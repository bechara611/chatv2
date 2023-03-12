export const useAuth = ()=>{
    const onLogin=async({email,password})=>{
        return {email,password}
    }
    return{
    onLogin
    }
}