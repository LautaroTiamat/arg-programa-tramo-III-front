import { createContext, useContext, useState } from "react";
import {
    guardarDatos,
    guardarToken,
    obtenerDatos,
    obtenerToken,
    limpiarLocalStorage,
} from "../utils/login";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;

    const [usuario, setUsuario] = useState(obtenerDatos());
    const [token, setToken] = useState(obtenerToken());

    const login = (datos, token) => {
        guardarDatos(datos);
        guardarToken(token);

        setUsuario(datos);
        setToken(token);
    }

    const logout = () => {
        limpiarLocalStorage();

        setUsuario(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ usuario, token, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
}

const useAuthContext = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuthContext,
}
