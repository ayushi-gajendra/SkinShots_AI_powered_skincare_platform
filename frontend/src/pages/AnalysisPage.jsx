import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import {useRef, useState, useEffect} from "react";
import {Row, Col, Image, Button, Container, Spinner} from "react-bootstrap";


export default function AnalysisPage(){

    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [analysisTaken, setAnalysisTaken] = useState(false);
    

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const retakeAnalysis = () => {
        setAnalysisTaken(false);
    };


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setSelectedFile(file);
        setSelectedImage(imageUrl);
        
    };


    useEffect(() => {
        if (selectedFile){
            fetchSkinConcern(selectedFile);
            setAnalysisTaken(true);
        }
        return () => {
            if (selectedImage) URL.revokeObjectURL(selectedImage);
        };
    }, [selectedFile]);


    const fetchSkinConcern = async (file) => {
        try{
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);
            const res = await fetch("http://127.0.0.1:5000/api/skin-analysis/",{
                method: "POST",
                body: formData,
            });
            if (!res.ok) throw new Error(`Server ${res.status}`)
            const data = await res.json();
            setPrediction(data.skin_concern);

        } catch(error){
            console.error("Error:", error);
        } finally{
            setLoading(false);
        }    
    };

    

    return(
        <>
        <main>
            <Container>
                {!analysisTaken ? (
                    <>
                        <Row>
                            <Col>
                                <div>
                                    <Image src="images/ai-skin-page.png" rounded fluid/>

                                </div>
                            </Col>
                            <Col className="analysis-page">
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
                                    
                                </div>
                            </Col>
                        </Row>
                    </>
                ) : (
                    <>
                        {loading ? (
                            <>
                                <Spinner/>
                                <h3>
                                    Sit back & relax.. <br /> 
                                    while our AI tool fetches your result..
                                </h3>
                            </>
                        ) : (
                            <>
                                {prediction ? (
                                    <>
                                        <Row className = "analysis-result">
                                            <Col>
                                                {selectedImage && (
                                                    <img 
                                                        src={selectedImage}
                                                        alt="Preview"
                                                        className="selected-image rounded"
                                                    />  
                                                )}
                                            </Col>
                                            <Col>
                                                <p>You primary skin concern is : {prediction.toUpperCase()}</p>
                                                <Button
                                                    onClick={retakeAnalysis}
                                                >
                                                    Retry taking the Analysis
                                                </Button>
                                            </Col> 
                                        </Row> 
                                    </>
                                ) : (
                                    <p>Unable to analyse, try uploading the image again.</p>
                                )}  
                            </>
                        )}
                    </>
                )}
                
            </Container>
        </main>
        </>
    )
}