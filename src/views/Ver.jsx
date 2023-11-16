import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import { traerDatosDeUsuarioPorID } from './../utils/llamados.js';

const Ver = () => {
    const { id } = useParams();

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');

    const traerDatos = async () => {
        const respuesta = await traerDatosDeUsuarioPorID(id);

        if (respuesta) {
            setNombres(respuesta.nombres);
            setApellidos(respuesta.apellidos);
        } else {
            console.log('No se encontró un usuario con el id ' + id);
        }
    }

    useEffect(() => {
        traerDatos();
    }, []);

    return (
        <Card.Body>
            <Card>
                <Card.Body>
                    <Card.Title>{ nombres } { apellidos }</Card.Title>
                    <Card.Text>
                        Este usuario tiene el id { id }
                    </Card.Text>
                    <Button variant="primary">
                        Editar
                    </Button>
                </Card.Body>
            </Card>

            <br />

            <Card>
                <Card.Body>
                    <Card.Title>Comentarios</Card.Title>
                    <Card.Body>

                        {
                            [...Array(2)].map((item, key) => (
                                <div key={key}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Usuario</Card.Title>
                                            <Card.Text>
                                                Este es un comentario
                                            </Card.Text>
                                            <Button variant="primary">
                                                Editar Comentario
                                            </Button>
                                            <Button variant="danger">
                                                Eliminar Comentario
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                </div>
                            ))
                        }

                    </Card.Body>
                </Card.Body>
            </Card>
        </Card.Body>
    );
}

export default Ver;
