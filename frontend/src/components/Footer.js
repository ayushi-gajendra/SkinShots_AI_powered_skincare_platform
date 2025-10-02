import {Navbar, Nav, Container} from 'react-bootstrap';


export default function AppFooter(){
    return(
        
            <Container fluid>
                <div>
                    <Nav className="footer-text">
                        <Nav.Item>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="#">Mail</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="#">Careers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="#">FAQs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="#">Instagram</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="#">Facebook</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="#">Linkedin</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar className="footer-navbar">
                        <div>Copyright © 2025 SkinShots</div>
                    </Navbar>          
                </div>
            </Container>
   
        
    )
}

    