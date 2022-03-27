import { Card, Button, Form } from 'react-bootstrap';

const MainMenu = () => {
    return ( 
        <div>
            <h2>Main Menu</h2>
            <Form>
            <div className="Body">
                <div className="Left">
                    <div className="Apps">
                        <h4>Appetizers</h4>
                        <p>&#36;6</p>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="edamame"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="gyoza"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="shumi"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="agadashi tofu"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    </div>
                            ))}
                    </div>
                    <div>
                        <h4>Ramen</h4>
                        <p>&#36;17</p>
                        <div className="InnerRamen">
                            <div>
                                <Card style={{ width: '10rem' }}>
                                <Card.Body>
                                    <Card.Title>Tonkatsu Ramen</Card.Title>
                                    <Card.Text>
                                    Hakata style “Tonkotsu” (pork bone broth boiled over 24 hrs) noodle soup topped with marinated chashu pork, 
                                    kikurage, menma, pickled ginger, sesame, scallions and drizzled with roasted garlic oil (Served with Straight Noodle)
                                    </Card.Text>
                                    <Button variant="outline-dark">Add to Order</Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                <Card.Body>
                                    <Card.Title>Shoyu Ramen</Card.Title>
                                    <Card.Text>
                                    Pork broth and soy-flavored wavy noodle soup, 
                                    topped with marinated chashu pork, kikurage, menma, pickled ginger, sesame and scallions (Served with Wavy Noodle)
                                    </Card.Text>
                                    <Button variant="outline-dark">Add to Order</Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                <Card.Body>
                                    <Card.Title>Kara Kara Tonkotsu Ramen</Card.Title>
                                    <Card.Text>
                                    Heat up with our spicy minced pork noodle soup topped with marinated chashu pork, kikurage, 
                                    menma, pickled ginger, sesame and scallions (Served with Straight Noodle)
                                    </Card.Text>
                                    <Button variant="outline-dark">Add to Order</Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                <Card.Body>
                                    <Card.Title>Veggie Miso Ramen</Card.Title>
                                    <Card.Text>
                                    Miso flavored noodle soup topped with broccoli, cabbage, carrots, onion, snow peas, zucchini, 
                                    pickled ginger, menma, kikurage, corn, beansprout, sesame and scallions (Served with Wavy Noodle)(Vegan)
                                    </Card.Text>
                                    <Button variant="outline-dark">Add to Order</Button>
                                </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="Desserts">
                        <h4>Desserts</h4>
                        <p>&#36;5</p>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="mochi ice cream"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="dorayaki"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="dorayaki combo"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    </div>
                            ))}
                    </div>   
                </div>
                <div className="Right">
                    <div>
                        <div className="InnerRight">
                            <h3>My Favorite Bowl</h3>
                            <Button variant="outline-dark">Add to Order</Button>
                        </div>
                        <div className="InnerRight">
                            <h3>Surprise Me</h3>
                            <p>&#36;40</p>
                            <p>**for two people**</p>
                            <p>1 appetizer</p>
                            <p>2 bowls of ramen</p>
                            <p>1 dessert</p>
                            <Button variant="outline-dark">Add to Order</Button>
                        </div>
                        <div className="InnerRight">
                            <h3>Build Your Bowl</h3>
                            <p>create your own ramen bowl</p>
                            <Button variant="outline-dark">Take Me Here</Button>
                        </div>
                    </div>
                </div>
            </div>
            </Form>
        </div>
     );
}
 
export default MainMenu;