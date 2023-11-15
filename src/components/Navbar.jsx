import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">ARG Programa</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/cargar">Cargar Dato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
