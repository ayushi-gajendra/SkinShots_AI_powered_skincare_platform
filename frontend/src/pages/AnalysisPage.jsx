import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import {useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Row, Col, Image, Button, Container} from "react-bootstrap";


export default function AnalysisPage(){

    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const navigate = useNavigate();

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

    useEffect(() => {
        if (selectedImage){
            fetchSkinConcern();
        }
    }, [selectedImage]);

    const fetchSkinConcern = async() => {
        try{
            const res = await fetch("http://127.0.0.1:5000/api/skin-analysis/");
            const data = await res.json();
            setPrediction(data.skin_concern);
            navigate(`/ai-analysis/result`);

        } catch(error){
            console.error("Error:", error);
        }      
    };

    

    return(
        <>
        <main>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Image src="images/ai-skin-page.png" rounded fluid/>

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

                            {prediction && (
                                <p>{prediction}</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
        </>
    )
}