import { Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import { useAuthContext } from '../context/AuthContext';

import FormularioEditar from '../components/FormularioEditar.jsx';

const Editar = () => {
  const { id } = useParams();

  const { token, usuario } = useAuthContext();

  return (
    <Card.Body>
      <FormularioEditar id={id} token={token} usuario={usuario} />
    </Card.Body>
  )
}

export default Editar
