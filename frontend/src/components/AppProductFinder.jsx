import {Container, Row, Col, Image, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";



export default function AppProductFinder(){

    const navigate = useNavigate();

    return(
            <section>
                <Container>
                    <Row>
                        <Col sm={6} className= "product-finder my-5">
                            <div className="image-overlay-container">
                                <Image href="#product-finder" src="images/product-finder.png" rounded fluid/>
                                <Button 
                                    variant="outline-dark" 
                                    className= "buttons" 
                                    size="lg" 
                                    onClick = { () => navigate("/product-finder") }
                                >
                                    Find My Product
                                </Button>
                            </div>
                        </Col>
                        <Col className= "my-5">
                            <Image src="images/product-finder-lady.jpg" rounded fluid/>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}

	
