import {Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = (props) => {
    const { id } = props;
    return (  
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href={`/edit/${id}`} style={{color: 'red'}}>My Account</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/cart">My Order</Nav.Link>
                    <Nav.Link href="/">Main Menu</Nav.Link>
                    <Nav.Link href="#bowl">Build Your Bowl</Nav.Link>
                    <Nav.Link href="#logout">Logout</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
 
export default NavBar;