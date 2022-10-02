export const reducer = ( state , action ) =>{
    switch(action.type){
        case "LOGIN_REQUEST": 
            return {...state , isLoading: true }
        case "LOGIN_SUCCESS": 
            return {...state , isLoading: false , isAuth : true , token: action.payload , isError: false}
        case "LOGIN_FAILURE" : 
            return {...state , isLoading: false , isError: true }
        case "LOGOUT":
            return {...state,isAuth: false}    
        default: return;
    }
}