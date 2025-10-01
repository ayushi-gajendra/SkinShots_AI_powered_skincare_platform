import {Container, Row, Col, Image, Button} from "react-bootstrap";



export default function AppProductFinder(){
    return(
            <section>
                <Container>
                    <Row>
                        <Col sm={6} className= "product-finder my-5">
                            <div className="image-overlay-container">
                                <Image href="#product-finder" src="images/product-finder.png" rounded fluid/>
                                <Button variant="outline-dark" className= "buttons" size="lg">Find My Products</Button>
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

	
