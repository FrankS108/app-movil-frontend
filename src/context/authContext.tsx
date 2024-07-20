import React, { createContext, useContext, useEffect, useState  } from 'react';
import { Auth } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    useEffect(() => {
        const authenticateUser = async() => {
            const token = sessionStorage.getItem('token');
            if(token){
                window.location.pathname == '/' ? navigate('/vencimientos'): navigate(window.location.pathname);
            }else{
                navigate('/');
            }

            //Llamar a API para login
        }

        authenticateUser()
    }, [])

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
