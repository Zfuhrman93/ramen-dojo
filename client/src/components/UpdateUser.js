import { Form, Button, FloatingLabel } from 'react-bootstrap';


const UpdateUser = () => {
    return ( 
        <div>

            <Form>
                <div >
                    <h3>Update Your Account</h3>
                    <div className="Name">
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" >
                            <Form.Control type="firstname" placeholder="first name" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" >
                            <Form.Control type="lastname" placeholder="last name" />
                        </FloatingLabel>
                    </div>
                    <div className="Address">
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                            <Form.Control type="address" placeholder="address" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="City" className="mb-3" >
                            <Form.Control type="city" placeholder="city" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="State" className="mb-3">
                            <Form.Control type="state" placeholder="state" />
                        </FloatingLabel>
                    </div>
                    <div className="UserInfo">
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                            <Form.Control type="email" placeholder="email@email.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                
                        <Button variant="outline-danger">Update Account</Button>
                        <Button variant="outline-warning">Delete Account</Button>
                    </div>
                </div>


            </Form>

        </div>
     );
}
 
export default UpdateUser;