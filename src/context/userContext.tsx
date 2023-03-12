import { createContext, useReducer } from "react";
import {ActionType, StateType} from "./reducer/userReducer";
import loginReducer from "./reducer/userReducer";


const INITIAL_STATE: StateType = {
    user: JSON.parse(localStorage.getItem('user') as string) || null,
    isLoading: false,
    error: ''
}   

interface UserContextType {
    state: StateType,
    dispatch: React.Dispatch<ActionType>
}

export const UserContext = createContext<UserContextType>({
    state: INITIAL_STATE,
    dispatch: ()=>  null
})

interface Props {
    children: React.ReactNode
}


const UserContextProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE)

    return (
        <UserContext.Provider value={{ state, dispatch }}>  
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider