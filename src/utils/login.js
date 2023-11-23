
export const guardarDatos = (datos) => {
    const valorTexto = JSON.stringify(datos);

    localStorage.setItem('usuario', valorTexto);
}

export const guardarToken = (token) => {
    localStorage.setItem('token', token);
}

export const obtenerDatos = () => {
    const datos = localStorage.getItem('usuario');

    return JSON.parse(datos);
}

export const obtenerToken = () => {
    return localStorage.getItem('token');
}

export const limpiarLocalStorage = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
}
