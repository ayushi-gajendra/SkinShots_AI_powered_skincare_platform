import {Container, Row, Col, Image, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


export default function AppAIAnalysis(){

    const navigate = useNavigate();

    return(
        <div>
            <Container>
                <Row>
                    <Col className= "ai-analysis-image">
                        <div>
                            <Image src="images/ai-skin.png" rounded fluid/> 
                        </div>
                    </Col>
                    
                    <Col  className="ai-analysis">
                        <div>
                            <Image src="images/AI-Analysis.png" rounded fluid/>
                            <Button 
                                variant="outline-dark" 
                                className= "buttons" 
                                size="lg" 
                                onClick = {() => navigate("/ai-analysis")}
                            >
                                Try Now
                            </Button>
                        </div>
                    </Col>
                
                </Row>
            </Container>
        </div>
    )
}