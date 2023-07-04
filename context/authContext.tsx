import React, {useState, useEffect, createContext, PropsWithChildren} from "react";
import axios from "axios";

interface User {
  // Define the structure of the user object here
}

interface AuthContextProps {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: User | null;
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  logOutUser: () => void;
  getToken: () => string | null;
 }

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  isLoading: true,
  user: null,
  storeToken: () => {},
  authenticateUser: () => {},
  logOutUser: () => {},
  getToken: () => null,
 });

const AuthProviderWrapper: React.FC<PropsWithChildren<{}>> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const storeToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response.data);
         })
        .catch((err) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          console.log(err);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    setIsLoggedIn(false);
    setUser(null);
   };

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        getToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProviderWrapper, AuthContext };
