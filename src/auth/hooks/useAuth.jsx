export const useAuth = ()=>{
    const onLoginUSE=async({email,password})=>{
        return {email,password}
    }
    return{
        onLoginUSE
    }
}