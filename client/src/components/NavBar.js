import {Navbar, Nav, Container} from 'react-bootstrap';
// import { navigate } from '@reach/router';
// import axios from "axios";

const NavBar = (props) => {
    const { id } = props;

    // const Logout = () => {
    //     const handleLogout = (e) => {
    //         e.preventDefault();
    //         axios.post('http://localhost:8000/api/logout/')
    //             .then((res)=>{
    //                 console.log(res);
    //                 console.log(res.data);
    //                 navigate("/login");
    //             })
    //             .catch((err)=>{
    //                 console.log(err);
    //                 console.log("err.res:", err.res);
    //                 console.log("err,res.data:", err.res.data);
    //                 console.log("err.res.data.errors:", err.res.data.errors);
    //             })
    //     };

    return (  
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href={`/edit/${id}`} style={{color: 'red'}}>My Account</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/cart">My Order</Nav.Link>
                    <Nav.Link href="/">Main Menu</Nav.Link>
                    <Nav.Link href="/bowl">Build Your Bowl</Nav.Link>
                    <Nav.Link href="/login">Logout</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;