import { Button } from 'react-bootstrap';


const CurrentOrder = () => {
    return ( 
        <div>
            
            <div className="Order">
            <h3>Your Order</h3>
            <div>
                <p>Items ordered here</p>
                <p>Items ordered here</p>
                <p>Items ordered here</p>
                <h5>Total $</h5>
                <br/>

            </div>
                <Button variant="outline-success">Place Order</Button>
                <Button variant="outline-warning">Update Order</Button>
                <Button variant="outline-danger">Cancel Order</Button>
            </div>
        </div>
     );
}
 
export default CurrentOrder;