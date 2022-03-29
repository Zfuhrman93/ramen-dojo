import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';



const Register = () => {
// Defining State Variables 

const [firstName, setFirstName] = ("");
const [lastName, setLastName] = ("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [password, setPassword] = ("");
const [confirmPassword, setConfirmPassword] = ("");
const [err, setErr] = ("");


const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { firstName, lastName, email, address, city, state, password, confirmPassword }
    try {
        const result = await axios.post("http://localhost:8000/api/register", postData);
        console.log(result);
    } catch (error) {
        setErr(err.response.data.error);
    }

};

    return ( 
        <div>
            <Form onSubmit={handleSubmit}>
                <div className="RegisterBody">
                    <h3>Register for an Account</h3>
                    <div className="Name">
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" onChange={(e) => setFirstName(e.target.value)} >
                            <Form.Control type="firstname" placeholder="first name" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" onChange={(e) => setLastName(e.target.value)}>
                            <Form.Control type="lastname" placeholder="last name" />
                        </FloatingLabel>
                    </div>
                    <div className="Address">
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3" onChange={(e) => setAddress(e.target.value)}>
                            <Form.Control type="address" placeholder="address" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="City" className="mb-3" onChange={(e) => setCity(e.target.value)} >
                            <Form.Control type="city" placeholder="city" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="State" className="mb-3" onChange={(e) => setState(e.target.value)}>
                            <Form.Control type="state" placeholder="state" />
                        </FloatingLabel>
                    </div>
                    <div className="UserInfo">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" onChange={(e) => setEmail(e.target.value)}>
                            <Form.Control type="email" placeholder="email@email.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" onChange={(e) => setPassword(e.target.value)}>
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3" onChange={(e) => setConfirmPassword(e.target.value)}>
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <Button variant="outline-danger">Register</Button>
                    </div>
                </div>


            </Form>
        </div>
     );
}
 
export default Register;