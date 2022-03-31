import NavBar from "../components/NavBar";
import MainMenu from "../components/MainMenu";
import { navigate } from '@reach/router';



const UserMain = (props) => {
    const { id } = props;
    return (  
        <div>
            <NavBar id={id} />
            <div>
                <MainMenu />
            </div>
        </div>
    );
}
 
export default UserMain;