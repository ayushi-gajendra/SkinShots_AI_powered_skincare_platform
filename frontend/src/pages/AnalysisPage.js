import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import {Row, Col, Image, Button, Container} from "react-bootstrap"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function AnalysisPage(){

    return(
        <>
        <main>
            {/* ------- Navbar Section -------- */}
				<AppNavbar />

            {/* ------ Analysis Section ------- */}
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <Image src="">

                            </div>
                        </Col>
                        <Col>
                            <div>
                                <p>Button section</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            {/* ----------- Footer -----------*/}  
                <AppFooter />
        </main>
        </>
    )
}