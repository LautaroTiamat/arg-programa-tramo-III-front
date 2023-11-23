import { createBrowserRouter } from "react-router-dom";

// Vistas
import Inicio from './views/Inicio.jsx';
import RegistrarUsuario from './views/RegistrarUsuario.jsx';
import Eliminar from './views/Eliminar.jsx';
import Editar from './views/Editar.jsx';
import Ver from './views/Ver.jsx';
import Login from './views/Login.jsx';
import CrearPosteo from './views/CrearPosteo.jsx';

const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
    }, {
        path: "/register",
        element: <RegistrarUsuario />,
    }, {
        path: "/crear",
        element: <CrearPosteo />,
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
