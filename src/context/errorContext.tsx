import React, { createContext, useState, useContext } from 'react';

interface ErrorContextType {
    errorMessage: string;
    setError: (message: string) => void;
    clearError: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useErrorContext = () => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error('useErrorContext must be used within an ErrorContextProvider');
    }
    return context;
};

const ErrorContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    const setError = (message: string) => {
        setErrorMessage(message);
    };

    const clearError = () => {
        setErrorMessage('');
    };

    const contextValue: ErrorContextType = {
        errorMessage,
        setError,
        clearError
    };

    return (
        <ErrorContext.Provider value={contextValue}>
            {children}
        </ErrorContext.Provider>
    );
};

export default ErrorContextProvider;

