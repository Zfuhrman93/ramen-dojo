import {Form, Button } from 'react-bootstrap';


const BuildBowl = () => {
    return ( 
        <div>
            <Form.Group>
                <h2>Build Your Bowl</h2>
                <p>*builds one bowl*</p>
                <div className="BuildBowl">
                    <div>
                        <div className="NoodleType">
                            <Form.Label>Noodle Type</Form.Label>
                            <Form.Select size="lg" >
                                <option>------------</option>
                                <option>Straight Noodles</option>
                                <option>Wavy Noodles</option>
                                <option>Surprise Me</option>
                            </Form.Select>
                        </div>
                        <div className="SoupBase">
                            <Form.Label>Soup Base</Form.Label>
                            <Form.Select size="lg" >
                                <option>------------</option>
                                <option>Shoyu (soy sauce)</option>
                                <option>Shio (salt)</option>
                                <option>Miso (soybean paste)</option>
                                <option>Tonkotsu (pork bone)</option>
                                <option>Surprise Me</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div>
                    <div className="Size">
                        <Form.Label>Size</Form.Label>
                        <Form.Select size="lg" >
                            <option>------------</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
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
                                />
                                <Form.Check
                                    inline
                                    label="menma"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="moyashi"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="tamago"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="seaweed"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="corn"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="kamaboko"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="butter"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
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
                <Button variant="outline-dark">Add to Order</Button>
            </Form.Group>
        </div>
     );
}
 
export default BuildBowl;


