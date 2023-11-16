import { createBrowserRouter } from "react-router-dom";

// Vistas
import Inicio from './views/Inicio.jsx';
import Cargar from './views/Cargar.jsx';
import Eliminar from './views/Eliminar.jsx';
import Editar from './views/Editar.jsx';
import Ver from './views/Ver.jsx';
import Login from './views/Login.jsx';

const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
    }, {
        path: "/cargar",
        element: <Cargar />,
    }, {
        path: "/eliminar/:id",
        element: <Eliminar />,
    }, {
        path: "/editar/:id",
        element: <Editar />,
    }, {
        path: "/ver/:id",
        element: <Ver />,
    }, {
        path: "/login",
        element: <Login />
    }
]);

export { rutas }
