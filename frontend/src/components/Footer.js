import {Navbar, Nav, Container} from 'react-bootstrap';


export default function AppFooter(){
    return(
        <section>
            <Container fluid>
                <div>
                    <Navbar className="footer-navbar">
                        <div>Copyright © 2025 SkinShots</div>
                    </Navbar>
                        <Nav className="footer-text">
                            <Nav.Item>
                                <Nav.Link href="#">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#">Mail</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#">FAQs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                Copyright © 2025 SkinShots
                            </Nav.Item>
                        </Nav>
                    
                </div>
            </Container>
        </section>
        
    )
}

    