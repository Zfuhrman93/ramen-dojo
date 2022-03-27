import Login from "../components/Login";
import Register from "../components/Register";
import RegisterNavBar from "../components/RegisterNavBar";

const RegisterMain = () => {
    return ( 
        <div>
            <RegisterNavBar />
            <div className="Register">
                <div>
                    <Register />
                </div>
                <div>
                    <Login />
                </div>
            </div>
        </div>
     );
}
 
export default RegisterMain;