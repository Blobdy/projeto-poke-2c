import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/home">PokeApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/viacep'>Viacep</Nav.Link>
                        <Nav.Link href="/home" active>Home</Nav.Link>
                        <Nav.Link href="/pokeflex">PokeFlex</Nav.Link>
                        <Nav.Link href="/pokegrid">PokeGrid</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
