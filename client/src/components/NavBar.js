import {Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
    return (  
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">My Account</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="#order">My Order</Nav.Link>
        <Nav.Link href="#main">Main Menu</Nav.Link>
        <Nav.Link href="#bowl">Build Your Bowl</Nav.Link>
        <Nav.Link href="#logout">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
}
 
export default NavBar;