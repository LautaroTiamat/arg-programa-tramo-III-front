import { useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { traerDatosDeUsuarioPorID } from './../utils/llamados.js';

const FormularioEditar = (props) => {
    const { id } = props;
    const url = 'http://localhost:3000/usuario';

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});

    const navigate = useNavigate();

    const cambiarNombres = (e) => {
        setNombres(e.target.value);
    }

    const cambiarApellidos = (e) => {
        setApellidos(e.target.value);
    }

    const verificarDatos = async () => {
        let misErrores = {}

        if (nombres.length === 0) {
            misErrores.nombres = 'Debe introducir al menos un nombre.';
        }
        
        if (apellidos.length === 0) {
            misErrores.apellidos = 'Debe introducir al menos un apellido.';
        }

        setErrores(misErrores);

        if (Object.entries(misErrores).length === 0) {
            setDeshabilitarBoton(true);
        
            console.log(nombres);
            console.log(apellidos);

            await mandarDatos();
        }
    }

    const mandarDatos = async () => {
        const datos = {
            id: id,
            nombres: nombres,
            apellidos: apellidos,
        }

        try {
            const respuesta = await axios.put(url, datos);

            if (respuesta.status === 200) {
                return navigate('/');
            } else {
                setErrores({ error: 'Ocurrió un error inesperado' });
            }
        } catch (error) {
            setErrores({ error: 'Ocurrió un error inesperado' });
        }

        setDeshabilitarBoton(false);
    }

    const traerDatos = async () => {
        const respuesta = await traerDatosDeUsuarioPorID(id);

        if (respuesta) {
            setNombres(respuesta.nombres);
            setApellidos(respuesta.apellidos);
        } else {
            setErrores({ error: 'Ocurrió un error inesperado. No se pudo obtener el usuario' });
            setDeshabilitarBoton(true);
        }
    }

    useEffect(() => {
        traerDatos();
    }, []);

    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Nombres
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" onInput={cambiarNombres} defaultValue={nombres} />
                    {
                        errores.nombres && (
                            <span style={{ color: 'red' }}>
                                {errores.nombres}
                            </span>
                        )
                    }
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Apellidos
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" onInput={cambiarApellidos} defaultValue={apellidos} />
                    {
                        errores.apellidos && (
                            <span style={{ color: 'red' }}>
                                {errores.apellidos}
                            </span>
                        )
                    }
                </Col>
            </Form.Group>

            {
                errores.error && (
                    <Alert variant="warning">
                        {errores.error}
                    </Alert>
                )
            }

            <Button variant="primary" onClick={verificarDatos} disabled={deshabilitarBoton}>
                Editar Datos
            </Button>
        </Form>
    );
}

export default FormularioEditar;
