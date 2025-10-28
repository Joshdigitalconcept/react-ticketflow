import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem('ticketapp_session');
    if (session) {
      setUser(JSON.parse(session));
    }
  }, []);

  const login = (email, password) => {
    if (email === 'test@example.com' && password === 'password123') {
      const sessionData = { email, loggedIn: true, loginTime: Date.now() };
      localStorage.setItem('ticketapp_session', JSON.stringify(sessionData));
      setUser(sessionData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('ticketapp_session');
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};