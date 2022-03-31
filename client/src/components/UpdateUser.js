import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { navigate } from '@reach/router';


const UpdateUser = (props) => { 
    
    const {id} = (props);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data);
                setFirstName(res.data[0].firstName);
                setLastName(res.data[0].lastName);
                setAddress(res.data[0].address);
                setCity(res.data[0].city);
                setState(res.data[0].state);
                setEmail(res.data[0].email);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    const editHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/user/${id}`,
        {
            firstName, lastName, address, city, state, email
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch ((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    };

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/user/${id}`)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return ( 
        <div>

            <Form onSubmit={editHandler}>
                <div >
                    <h3>Update Your Account</h3>
                    <div className="Name">
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                            <Form.Control type="firstname" placeholder="first name" value={firstName} onChange= {(e) => setFirstName(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                            <Form.Control type="lastname" placeholder="last name" value={lastName} onChange= {(e) => setLastName(e.target.value)} />
                        </FloatingLabel>
                    </div>
                    <div className="Address">
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                            <Form.Control type="address" placeholder="address" value={address} onChange= {(e) => setAddress(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="City" className="mb-3">
                            <Form.Control type="city" placeholder="city" value={city} onChange= {(e) => setCity(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="State" className="mb-3">
                            <Form.Control type="state" placeholder="state" value={state} onChange= {(e) => setState(e.target.value)} />
                        </FloatingLabel>
                    </div>
                    <div className="UserInfo">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="email@email.com" value={email} onChange= {(e) => setEmail(e.target.value)} />
                        </FloatingLabel>
                
                        <Button variant="outline-danger" type="submit">Update Account</Button>
                        <Button variant="outline-warning" onClick={handleDelete}>Delete Account</Button>
                    </div>
                </div>


            </Form>

        </div>
     );
}
 
export default UpdateUser;