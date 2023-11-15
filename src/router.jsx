import { createBrowserRouter } from "react-router-dom";

// Vistas
import Inicio from './views/Inicio.jsx';
import Cargar from './views/Cargar.jsx';
import Eliminar from './views/Eliminar.jsx';

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
    }
]);

export { rutas }
