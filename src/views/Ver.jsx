import { useState, useEffect } from 'react';
import { Card, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';

import { useAuthContext } from '../context/AuthContext';

import {
    traerDatosDePosteoPorID,
    traerComentariosDePosteoPorID,
} from './../utils/llamados.js';

const Ver = () => {
    const { id } = useParams();

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [comentarios, setComentarios] = useState([]);
    const [miComentario, setMiComentario] = useState('');

    const { token } = useAuthContext();

    const traerDatos = async () => {
        const respuesta = await traerDatosDePosteoPorID(id);

        if (respuesta) {
            setTitulo(respuesta.titulo);
            setDescripcion(respuesta.descripcion);

            await traerComentarios();
        } else {
            console.log('No se encontró una publicación con el id ' + id);
        }
    }

    const traerComentarios = async () => {
        const respuesta = await traerComentariosDePosteoPorID(id);

        if (respuesta) {
            setComentarios(respuesta);
        } else {
            console.log('No se pudo obtener los comentarios de la publicación');
        }
    }

    const enviarComentario = async () => {
        const url = 'http://localhost:3000/comentarios';

        const datos = {
            descripcion: miComentario,
            idPosteo: id,
        }

        const headers = {
            token: token
        }

        try {
            const respuesta = await axios.post(url, datos, { headers: headers });

            if (respuesta.status === 200) {
                setMiComentario('');

                await traerComentarios();
            } else {
                console.log({ error: 'Ocurrió un error inesperado' });
            }
        } catch (error) {
            console.log({ error: 'Ocurrió un error inesperado' });
        }
    }

    useEffect(() => {
        traerDatos();
    }, []);

    return (
        <Card.Body>
            <Card>
                <Card.Body>
                    <Card.Title>{ titulo }</Card.Title>
                    <Card.Text>
                        { descripcion }
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
                            comentarios.map((comentario, key) => (
                                <div key={key}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{ comentario.autor.apellidos + ' ' + comentario.autor.nombres }</Card.Title>
                                            <Card.Text>
                                                { comentario.descripcion }
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

                        <br />

                        <Card>
                            <Card.Body>
                                <Card.Title>Agregar Comentario</Card.Title>
                                <br />
                                <FloatingLabel controlId="comentario" label="Comentario">
                                    <Form.Control
                                        onInput={(e) => setMiComentario(e.target.value)}
                                        value={miComentario}
                                        as="textarea"
                                        placeholder="Ingrese un comentario"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                                <br />
                                
                                <Button variant="primary" onClick={enviarComentario}>
                                    Agregar
                                </Button>
                            </Card.Body>
                        </Card>

                    </Card.Body>
                </Card.Body>
            </Card>
        </Card.Body>
    );
}

export default Ver;
