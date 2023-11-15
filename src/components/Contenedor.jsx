const Contenedor = ({ nombre, apellido = 'Indefinido' }) => {
    return (
        <div>
            <p>Hola {nombre} {apellido}</p>
        </div>
    )
}

export { Contenedor }
