import axios from 'axios';

const url = 'http://localhost:3000/usuario';

const traerDatosDeUsuarioPorID = async (id) => {
    const endpoint = url + '/' + id;

    try {
        const respuesta = await axios.get(endpoint);

        if (respuesta.status === 200) {
            return respuesta.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export {
    traerDatosDeUsuarioPorID,
}
