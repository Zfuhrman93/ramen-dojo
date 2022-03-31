import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';



const Register = () => {
// Defining State Variables 

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
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



                        {/* {errors.firstName? <p className="errors">{errors.firstName.message}</p> : null} */}
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" onChange={(e) => setLastName(e.target.value)}>
                            <Form.Control type="lastname" placeholder="last name" />
                        </FloatingLabel>
                        {/* {errors.lastName ? <p className="errors">{errors.lastName.message}</p> : null} */}
                    </div>
                    <div className="Address">
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3" onChange={(e) => setAddress(e.target.value)}>
                            <Form.Control type="address" placeholder="address" />
                        </FloatingLabel>
                        {/* {errors.address ? <p className="errors">{errors.address.message}</p> : null} */}
                        <FloatingLabel controlId="floatingInput" label="City" className="mb-3" onChange={(e) => setCity(e.target.value)} >
                            <Form.Control type="city" placeholder="city" />
                        </FloatingLabel>
                        {/* {errors.city ? <p className="errors">{errors.city.message}</p> : null} */}

                        <FloatingLabel controlId="floatingInput" label="State" className="mb-3" onChange={(e) => setState(e.target.value)}>
                            <Form.Control type="state" placeholder="state" />
                        </FloatingLabel>
                        {/* {errors.state ? <p className="errors">{errors.state.message}</p> : null} */}

                    </div>
                    <div className="UserInfo">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" onChange={(e) => setEmail(e.target.value)}>
                            <Form.Control type="email" placeholder="email@email.com" />
                        </FloatingLabel>
                        {/* {errors.email ? <p className="errors">{errors.email.message}</p> : null} */}

                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" onChange={(e) => setPassword(e.target.value)}>
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3" onChange={(e) => setConfirmPassword(e.target.value)}>
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        {/* {errors.password ? <p className="errors">{errors.password.message}</p> : null} */}

                        <Button onClick={handleSubmit} variant="outline-danger">Register</Button>
                    </div>
                </div>


            </Form>
        </div>
     );
}
 
export default Register;