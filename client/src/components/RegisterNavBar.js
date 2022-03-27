import {Navbar, Nav, Container} from 'react-bootstrap';

const RegisterNavBar = () => {
    return (  
        <div>
           <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#main">Main Menu</Nav.Link>
                    <Nav.Link href="#bowl">Build Your Bowl</Nav.Link>
                </Nav>
                </Container>
            </Navbar> 
        </div>
    );
}
 
export default RegisterNavBar;