import NavBar from "../components/NavBar";
import OrderHistory from "../components/OrderHistory";
import UpdateUser from "../components/UpdateUser";

const AccountMain = (props) => {
    const { id } = props;
    return ( 
        <div>
            <div>
                <NavBar />
            </div>
            <div className="Account">
                <div>
                    <UpdateUser id={id} />
                </div>
                <div>
                    <OrderHistory />
                </div>
            </div>

        </div>
     );
}
 
export default AccountMain;