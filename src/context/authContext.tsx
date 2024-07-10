import React, { createContext, useContext, useEffect, useState } from 'react'
import { Auth } from '../interfaces/interfaces';

interface AuthContextType {
    auth: Auth,
    setAuth: (auth: Auth) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }

    return context;
}

const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [auth, setAuth] = useState<Auth>({} as Auth);

    useEffect(() => {
        const authenticateUser = async() => {
            const token = sessionStorage.getItem('token');
            if(!token){
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            //Llamar a API para login
        }
    })

    const contextValue: AuthContextType = {
        auth,
        setAuth
    };

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
