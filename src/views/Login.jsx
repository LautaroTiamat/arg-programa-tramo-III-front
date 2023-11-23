import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { guardarDatos, guardarToken } from '../utils/login';

import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const [errores, setErrores] = useState({});

  const navigate = useNavigate();
  const { login } = useAuthContext();

  const cambiarUsuario = (e) => {
    setUsuario(e.target.value);
  }

  const cambiarContrasenia = (e) => {
    setContrasenia(e.target.value);
  }

  const verificarDatos = async () => {
    let misErrores = {}

    if (usuario.length === 0) {
      misErrores.usuario = 'Debe introducir un usuario.';
    }

    if (contrasenia.length === 0) {
      misErrores.contrasenia = 'Debe introducir una contraseña.';
    }

    setErrores(misErrores);

    if (Object.entries(misErrores).length === 0) {
      setDeshabilitarBoton(true);

      await mandarDatos();
    }
  }

  const mandarDatos = async () => {
    const url = 'http://localhost:3000/autenticar';

    const datos = {
      usuario: usuario,
      contrasenia: contrasenia,
    }

    try {
      const respuesta = await axios.post(url, datos);

      if (respuesta.status === 200) {
        const { datos, token } = respuesta.data;

        login(datos, token);
        navigate('/');
      } else {
        setErrores({ error: 'Los datos ingresados no son válidos' });
      }
    } catch (error) {
      setErrores({ error: 'Ocurrió un error inesperado' });
    }

    setDeshabilitarBoton(false);
  }

  return (
    <Card.Body>
      <Form>
        <Form.Group className="mb-3" controlId="usuario">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Usuario" onInput={cambiarUsuario} />
          {
            errores.usuario && (
              <Form.Text style={{ color: 'red' }}>
                { errores.usuario }
              </Form.Text>
            )
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="contraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" onInput={cambiarContrasenia} />
          {
            errores.contrasenia && (
              <Form.Text style={{ color: 'red' }}>
                { errores.contrasenia }
              </Form.Text>
            )
          }
        </Form.Group>

        {
          errores.error && (
            <Alert variant="warning">
              {errores.error}
            </Alert>
          )
        }

        <Button variant="primary" onClick={verificarDatos} disabled={deshabilitarBoton}>
          Ingresar
        </Button>
      </Form>
    </Card.Body>
  )
}

export default Login
