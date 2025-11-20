import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useCart} from "../context/CartContext";
import {Container, Card, Button, Spinner, Col, Row} from "react-bootstrap";


export default function ProductFinderPage(){

    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isComplete, setIsComplete] = useState(false);
    const [personalisedProducts, setPersonalisedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {addToCart} = useCart();


    const questions = [
        { key: "gender", question: "What is your gender?", options: ["Male", "Female", "Prefer not to answer"] },
        { key: "age", question: "What is your age?", options: ["Below 20", "20-30", "31-40", "Above 40"] },
        { key: "skinConcern", question: "What is your primary Skin Concern?", options: ["Acne", "Blackheads", "Dark Spots", "Pores", "Wrinkles"] },
        { key: "skinType", question: "What is your skin type?", options: ["Oily", "Dry", "Combination", "Normal", "Sensitive"] },
        { key: "sunExposure", question: "How often are you exposed to sunlight?", options: ["Rarely", "Occasionally", "Daily for 1-2 hours", "Daily for 3+ hours"] },
        { key: "makeup", question: "Do you wear makeup regularly?", options: ["Yes, daily", "Occasionally", "No"] }
    ];


    const current = questions[step];
    

    const handleAnswers = (value) => {
        const key = current.key;
        const finalAnswers = { ...answers, [key] : value };
        setAnswers(finalAnswers);

        if (step < questions.length-1){
            setStep(step+1);
        } else{
            setIsComplete(true);
        }
    };


    useEffect(() => { 
        if(isComplete) fetchPersonalisedProducts();
    }, [isComplete]);


    const fetchPersonalisedProducts = async () => {
        setLoading(true);
        try{
            const res = await fetch("http://127.0.0.1:5000/api/personalised-products/",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({answers})
            });
            const data = await res.json();
            setPersonalisedProducts(data);
        } catch(err){
            console.error("Error fetching personalised products", err);
        } finally{
            setLoading(false);
        }  
    };
    
    
    return(
        <main>
            <Container className = "recommendations-text">
                {!isComplete ? (
                    <>
                        <h2 className = "questions">
                            {current.question}
                        </h2>
                        {current.options.map((option,index) => (
                                <Button
                                    className = "option-buttons" 
                                    key = {index}
                                    onClick = {() => handleAnswers(option)}
                                >
                                    {option}
                                </Button>
                        ))}  
                    </>
                ) : (
                    <>
                        
                        {loading ? (
                            <>
                                <Spinner/>
                                <h3>
                                    Sit back & relax.. <br /> 
                                    while our AI tool fetches the perfect products for you <br />
                                    and a bonus skincare routine !
                                </h3>
                            </>
                        ) : (
                            <>
                                <Button className = "top-heading-button">AI - Generated Personalised Product Recommendations</Button>
                                {personalisedProducts.recommendations?.length > 0 ? (
                                    <>
                                        {personalisedProducts.recommendations.map((product) => (
                                            <div key={product.id} className = "recommendations">
                                                <Card  className = "recommended-products">
                                                    <Card.Body>
                                                        <Row>
                                                            <Col>
                                                                <Card.Title>{product.category}</Card.Title>
                                                            </Col>
                                                            <Col>
                                                                <Card.Img src={product.image} alt={product.name} className = "recommendations-img" />
                                                            </Col>
                                                            <Col>
                                                                <Card.Subtitle>{product.name}</Card.Subtitle>
                                                            </Col>
                                                            <Col>
                                                                <Card.Text>{product.reason}</Card.Text>
                                                            </Col>
                                                            <Col>
                                                                <Button
                                                                    className = "recommend-button"
                                                                    onClick = {() => addToCart(product)}
                                                                >
                                                                    Add To Cart
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                        <Button className = "heading-button">Day Routine</Button>
                                        <Row className = "recommendations">
                                            {personalisedProducts.dayRoutine.map((step, index) => (
                                                <Col key={step.id}>
                                                    <Card className = "routine">
                                                        <Row>
                                                            <Card.Subtitle className = "pt-2"><u>Step {step.stepNumber}</u></Card.Subtitle>
                                                        </Row>
                                                        <Row>
                                                            <Card.Title>{step.category}</Card.Title>
                                                        </Row>
                                                        <Row>
                                                            <Card.Img src = {`/images/product${index+1}.png`} alt={step.name}/>
                                                        </Row>
                                                        <Row>
                                                            <Card.Subtitle>{step.name}</Card.Subtitle>
                                                        </Row>
                                                        <Row>
                                                            <Card.Text>{step.howToApply}</Card.Text>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Button className = "heading-button">Night Routine</Button>
                                        <Row className = "recommendations">
                                            {personalisedProducts.nightRoutine.map((step,index) => (
                                                <Col key = {step.id}>
                                                        <Card className = "routine">
                                                                <Row>
                                                                    <Card.Subtitle className = "pt-2"><u>Step {step.stepNumber}</u></Card.Subtitle>
                                                                </Row>
                                                                <Row>
                                                                    <Card.Title>{step.category}</Card.Title>
                                                                </Row>
                                                                <Row>
                                                                    <Card.Img src = {`/images/product${index+1}.png`} alt={step.name}/>
                                                                </Row>
                                                                <Row>
                                                                    <Card.Subtitle>{step.name}</Card.Subtitle>
                                                                </Row>
                                                                <Row>
                                                                    <Card.Text>{step.howToApply}</Card.Text>
                                                                </Row>
                                                            
                                                        </Card>
                                                </Col> 
                                            ))}
                                        </Row>
                                    </>
                                )
                                : (
                                    <p>No personalised product recommendations fetched!</p>
                                )}
                            </>
                        )} 
                    </>
                )}
                
            </Container>

        </main>
    );

}