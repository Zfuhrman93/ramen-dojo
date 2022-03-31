import NavBar from "../components/NavBar";
import MainMenu from "../components/MainMenu";
import { navigate } from '@reach/router';



const UserMain = (props) => {
    const { id } = props;
    if(!id) navigate('/login');
    return (  
        <div>
            <NavBar />
            <div>
                <MainMenu />
            </div>
        </div>
    );
}
 
export default UserMain;