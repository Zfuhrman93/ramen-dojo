import { Form, FloatingLabel,Button } from 'react-bootstrap'


const Login = () => {
    return ( 
        <div>
            <Form>
                <h3>Login</h3>
                <div className="LoginInfo">
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                        <Form.Control type="email" placeholder="email@email.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="outline-danger">Register</Button>
                </div>
            </Form>
        </div>
     );
}
 
export default Login;