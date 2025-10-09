import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import React, {useRef, useState} from "react"
import {Row, Col, Image, Button, Container} from "react-bootstrap"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"

export default function AnalysisPage(){

    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleButtonClick = () =>{
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file){
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

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
                                <Image src="images/ai-skin-page.png"rounded fluid/>

                            </div>
                        </Col>
                        <Col className="analysis-page-text">
                            <div>
                                <h1>AI Skin Analysis</h1>
                                <p></p>
                                <p>Ready for Your Personalized Skin Journey?</p>
                                <p>To ensure the most accurate results, please upload a well-lit, clear image of your face.</p>
                                <ul>
                                    <li>Ensure your face is free of makeup.</li>
                                    <li>Use natural, even lighting if possible.</li>
                                    <li>Look directly at the camera.</li>
                                </ul>
                                <Button 
                                    variant="outline-dark"
                                    size="lg"
                                    onClick={handleButtonClick}
                                >
                                    Start My Analysis
                                </Button>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{display:"none"}}
                                />
                                {selectedImage && (
                                    <img 
                                        src={selectedImage}
                                        alt="Preview"
                                        className="preview-image"
                                    />
                                )}
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