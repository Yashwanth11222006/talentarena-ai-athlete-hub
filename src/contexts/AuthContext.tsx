import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserType = 'athlete' | 'coach' | 'official' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  profile?: any;
}

interface AuthContextType {
  user: User | null;
  userType: UserType;
  login: (email: string, password: string, type: UserType) => Promise<void>;
  signup: (userData: any, type: UserType) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string, type: UserType) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: type === 'athlete' ? 'Alex Johnson' : type === 'coach' ? 'Coach Smith' : 'SAI Official',
        email,
        type,
      };
      
      setUser(mockUser);
      setUserType(type);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: any, type: UserType) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser: User = {
        id: '1',
        name: userData.firstName ? `${userData.firstName} ${userData.lastName}` : userData.name,
        email: userData.email,
        type,
        profile: userData,
      };
      
      setUser(mockUser);
      setUserType(type);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      userType,
      login,
      signup,
      logout,
      isLoading,
    }}>
      {children}
    </AuthContext.Provider>
  );
};