import CurrentOrder from "../components/CurrentOrder";
import NavBar from "../components/NavBar";



const OrderMain = (props) => {
    const { id } = props;
    return ( 
        <div>
            <NavBar id={id} />
            <div>
                <CurrentOrder id={id} />
            </div>
        </div>
    );
}
export default OrderMain;