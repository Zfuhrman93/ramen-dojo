import NavBar from "../components/NavBar";
import OrderHistory from "../components/OrderHistory";
import UpdateUser from "../components/UpdateUser";

const AccountMain = () => {
    return ( 
        <div>
            <div>
                <NavBar />
            </div>
            <div className="Account">
                <div>
                    <UpdateUser />
                </div>
                <div>
                    <OrderHistory />
                </div>
            </div>

        </div>
     );
}
 
export default AccountMain;