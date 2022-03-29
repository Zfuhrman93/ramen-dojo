import { Form, FloatingLabel,Button } from 'react-bootstrap'
import axios from "axios";
import React, { useState } from 'react';

const Login = () => {
    // Defining State Variables 

    const [email, setEmail] = useState("");
    const [password, setPassword] = ("");
    const [err, setErr] = ("");
    const [successMsg, setSuccessMsg] = ("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            email,
            password,

        };
        try {
            const result = await axios.post("http://localhost:8000/api/login", postData,
            { withCredentials: True }
            );
            console.log(result);
            setSuccessMsg("Successful Login!")

        } catch (error) {
            console.log(error.response);
            setErr(error.response.data.error);
        }
    };

    return ( 
        <div>
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="LoginInfo">
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" onChange={(e) => setFirstName(e.target.value)} >
                        <Form.Control type="email" placeholder="email@email.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" onChange={(e) => setPassword(e.target.value)}>
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="outline-danger">Register</Button>
                    {successMsg && <h3>{successMsg}</h3>}
                    {err && <h3>{err}</h3>}
                </div>
            </Form>
        </div>
     );
}
 
export default Login; 