import { RouterProvider } from "react-router-dom";

import DefaultLayout from './layouts/DefaultLayout.jsx';

import { rutas } from './router.jsx';

const App = () => {
  return (
    <DefaultLayout>
      <RouterProvider router={rutas} />
    </DefaultLayout>
  );
}

export default App
