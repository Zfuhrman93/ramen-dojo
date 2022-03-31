import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { navigate } from '@reach/router';


const UpdateUser = (props) => { 

    const {id} = (props);
    const[errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setAddress(res.data.address);
                setCity(res.data.city);
                setState(res.data.state);
                setEmail(res.data.email);
                setPassword(res.data.password);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    
    const editHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/user/${id}`,
        {
            firstName, lastName, address, city, state, email, password
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            // navigate("/")
        })
        .catch ((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    };

    return ( 
        <div>

            <Form onSubmit={editHandler}>
                <div >
                    <h3>Update Your Account</h3>
                    <div className="Name">
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" value={firstName} onChange= {(e) =setFirstName(e.target.value)}>
                            <Form.Control type="firstname" placeholder="first name" />
                            {errors.firstName?.message}
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" value={lastName} onChange= {(e) =setLastName(e.target.value)}>
                            <Form.Control type="lastname" placeholder="last name" />
                            {errors.lastName?.message}
                        </FloatingLabel>
                    </div>
                    <div className="Address">
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3" value={address} onChange= {(e) =setAddress(e.target.value)}>
                            <Form.Control type="address" placeholder="address" />
                            {errors.address?.message}
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="City" className="mb-3" value={city} onChange= {(e) =setCity(e.target.value)}>
                            <Form.Control type="city" placeholder="city" />
                            {errors.city?.message}
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="State" className="mb-3" value={state} onChange= {(e) =setState(e.target.value)}>
                            <Form.Control type="state" placeholder="state" />
                            {errors.state?.message}
                        </FloatingLabel>
                    </div>
                    <div className="UserInfo">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" value={email} onChange= {(e) =setEmail(e.target.value)}>
                            <Form.Control type="email" placeholder="email@email.com" />
                            {errors.email?.message}
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" value={password} onChange= {(e) =setPassword(e.target.value)}>
                            <Form.Control type="password" placeholder="Password" />
                            {errors.password?.message}
                        </FloatingLabel>
                
                        <Button variant="outline-danger" type="submit">Update Account</Button>
                        <Button variant="outline-warning">Delete Account</Button>
                    </div>
                </div>


            </Form>

        </div>
     );
}
 
export default UpdateUser;