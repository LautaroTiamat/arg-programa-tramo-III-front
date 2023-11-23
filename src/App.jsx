import { RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext.jsx";
import DefaultLayout from './layouts/DefaultLayout.jsx';

import { rutas } from './router.jsx';

const App = () => {
  return (
    <AuthProvider>
      <DefaultLayout>
        <RouterProvider router={rutas} />
      </DefaultLayout>
    </AuthProvider>
  );
}

export default App
