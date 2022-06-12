import {Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import NavBar from './NavBar';
import axios from 'axios'

const BuildBowl = (props) => {
    const { id } = props
    const [ noodleType, setNoodleType ] = useState("")
    const [ soupBase, setSoupBase ] = useState("");
    const [ size, setSize ] = useState("");
    const [ chashu, setChashu ] = useState(false);
    const [ menma, setMenma ] = useState(false);
    const [ moyashi, setMoyashi ] = useState(false);
    const [ tamago, setTamago ] = useState(false);
    const [ seaweed, setSeaweed ] = useState(false);
    const [ kamaboko, setKamaboko ] = useState(false);
    const [ corn, setCorn ] = useState(false);
    const [ butter, setButter ] = useState(false);
    
		async function addOrder(item){
			try{
					const user = await axios.get(`http://localhost:8000/api/user/${id}`)
					const currentCart = user.data[0].cart;
					console.log(currentCart);
					try{
							const userUpdate = await axios.put(`http://localhost:8000/api/user/${id}`, {
									cart: [...currentCart, item]
							})
							console.log(userUpdate)
					}catch(err){
							console.log(err)
					}
			}catch(err){
					console.log(err)
			}
		}
    
    const submitHandler = async (e) => {
      e.preventDefault();
      
      const data = { noodleType, soupBase, size, chashu, menma, moyashi, tamago, seaweed, kamaboko, corn, butter };
        try{
              const result = await axios.post('http://localhost:8000/api/ramen', data)
              const recent = await axios.get('http://localhost:8000/api/ramen/recent');
              console.log(result)
							addOrder(recent.data[0]._id)
          }catch(err){
              console.log(err.response)
          }
    }

			return ( 
        <div>
            <div>
                <NavBar id={id} />
            </div>
            <Form.Group>
                <h2>Build Your Bowl</h2>
                <p>*builds one bowl*</p>
                <div className="BuildBowl">
                    <div>
                        <div className="NoodleType">
                            <Form.Label>Noodle Type</Form.Label>
                            <Form.Select size="lg" onChange={(e) => setNoodleType(e.target.value)} >
                                <option value="">------------</option>
                                <option value="Straight Noodles">Straight Noodles</option>
                                <option value="Wavy Noodles">Wavy Noodles</option>
                            </Form.Select>
                        </div>
                        <div className="SoupBase">
                            <Form.Label>Soup Base</Form.Label>
                            <Form.Select size="lg" onChange={(e) => setSoupBase(e.target.value)} >
                                <option>------------</option>
                                <option value="Shoyu (soy sauce)">Shoyu (soy sauce)</option>
                                <option value="Shio (salt)">Shio (salt)</option>
                                <option value="Miso (soybean paste)">Miso (soybean paste)</option>
                                <option value="Tonkotsu (pork bone)">Tonkotsu (pork bone)</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div>
                    <div className="Size">
                        <Form.Label>Size</Form.Label>
                        <Form.Select size="lg" onChange={(e) => setSize(e.target.value)} >
                            <option value="">------------</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </Form.Select>
                    </div>
                        <div className="Toppings">
                            <Form.Label>Toppings</Form.Label>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="chashu"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={(e) => setChashu(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="menma"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={(e) => setMenma(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="moyashi"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={(e) => setMoyashi(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="tamago"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={(e) => setTamago(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="seaweed"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={(e) => setSeaweed(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="corn"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={(e) => setCorn(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="kamaboko"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={(e) => setKamaboko(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="butter"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={(e) => setButter(e.target.checked)}
                                />
                                <Form.Check
                                    inline
                                    label="surprise me"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
                <Button variant="outline-dark" onClick={submitHandler}>Add to Order</Button>
            </Form.Group>
        </div>
    );
}

export default BuildBowl;


