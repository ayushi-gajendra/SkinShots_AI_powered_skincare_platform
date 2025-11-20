import {Container, Row, Col, Image, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";



export default function AppProductFinder(){

    const navigate = useNavigate();

    return(
            <section>
                <Container>
                    <Row>
                        <Col sm={6} className= "product-finder">
                            <div className="image-overlay-container">
                                <Image href="#product-finder" src="images/product-finder.png" rounded fluid/>
                                <Button 
                                    className= "buttons"
                                    onClick = { () => navigate("/product-finder") }
                                >
                                    Find My Product
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <Image src="images/product-finder-lady.jpg" rounded fluid/>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}

	
