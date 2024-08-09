import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getCurrentUser } from '../lib/appauth'; // Adjust the import as necessary

// Define the context types
interface GlobalContextType {
  isLogged: boolean;
  user: any; // Replace with a more specific type if you have a user model
  loading: boolean;
  setIsLogged: (value: boolean) => void;
  setUser: (user: any) => void;
}

// Create the context with default values
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

// Define the provider component
const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null); // Replace with a more specific type if needed
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setIsLogged(true);
          setUser(currentUser);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsLogged(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        loading,
        setIsLogged,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
