import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = localStorage.getItem('skillmela_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Simulate API call - replace with actual backend call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Demo credentials
                if (email === 'student@skillmela.com' && password === 'password123') {
                    const userData = {
                        id: '1',
                        email,
                        name: 'Student User',
                        role: 'student'
                    };
                    setUser(userData);
                    localStorage.setItem('skillmela_user', JSON.stringify(userData));
                    resolve(userData);
                } else if (email === 'admin@skillmela.com' && password === 'admin123') {
                    const userData = {
                        id: '2',
                        email,
                        name: 'Admin User',
                        role: 'admin'
                    };
                    setUser(userData);
                    localStorage.setItem('skillmela_user', JSON.stringify(userData));
                    resolve(userData);
                } else {
                    reject(new Error('Invalid email or password'));
                }
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('skillmela_user');
    };

    const register = async (name, email, password) => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const userData = {
                    id: Date.now().toString(),
                    email,
                    name,
                    role: 'student'
                };
                setUser(userData);
                localStorage.setItem('skillmela_user', JSON.stringify(userData));
                resolve(userData);
            }, 1000);
        });
    };

    const value = {
        user,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
