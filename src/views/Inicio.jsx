import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
//import axios from 'axios';

import TablaDeDatos from './../components/TablaDeDatos.jsx';

const Inicio = () => {
  const [lista, setLista] = useState([]);

  const cargarLista = async () => {
    const url = 'http://localhost:3000/usuarios';

    //const respuesta = await axios.get(url);
    let respuesta = await fetch(url);

    if (respuesta.status === 200) {
      respuesta = await respuesta.json();

      setLista(respuesta);
    }
  }

  useEffect(() => {
    cargarLista();
  }, []);

  return (
    <Card.Body>
      <TablaDeDatos lista={lista} />
    </Card.Body>
  )
}

export default Inicio
