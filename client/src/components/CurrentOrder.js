import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';



const CurrentOrder = (props) => {
    const { id } = props;
    const [ cart, setCart ] = useState([]);
    const [ cost, setCost ] = useState("");

    useEffect(() => {
      axios.get(`http://localhost:8000/api/user/${id}`)
        .then(user => {
          setCart(user.data[0].cart)
          setCost(user.data[0].cost)
        })
        .catch(err => {
          console.log(err)
        })
    })

    const handleCancel = async () => {
        try{
            const userUpdate = await axios.put(`http://localhost:8000/api/user/${id}`, {
                cart: [],
                cost: 0
            })
            console.log(userUpdate);
        }catch(err){
            console.log(err);
        }
    }
    return ( 
        <div>
            
            <div className="Order">
            <h3>Your Order</h3>
            <div>
                {cart ? cart.map((item, index) => {
                    return(
                        <p key={index}>{item}</p>
                    )
                }) : null}
                <h5>Total $ {cost}</h5>
                <br/>

            </div>
                <Button type="button" onClick={handleCancel} variant="outline-success">Place Order</Button>
                <Button type="button" variant="outline-warning">Update Order</Button>
                <Button type="button" onClick={handleCancel} variant="outline-danger">Cancel Order</Button>
            </div>
        </div>
     );
}
 
export default CurrentOrder;