import CurrentOrder from "../components/CurrentOrder";
import NavBar from "../components/NavBar";



const OrderMain = () => {
    return ( 
        <div>
            <NavBar />
            <div>
                <CurrentOrder />
            </div>
        </div>
     );
}
 
export default OrderMain;