import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import {useState, useEffect} from "react";
import {navigate, useNavigate} from "react-router-dom";
import {Container, Button} from "react-bootstrap";


export default function ProductFinderPage(){

    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isComplete, setIsComplete] = useState(false);
    const navigate = useNavigate();

    const questions = [
        { key: "gender", question: "What is your gender?", options: ["Male", "Female", "Prefer not to answer"] },
        { key: "age", question: "What is your age?", options: ["Below 20", "20-30", "31-40", "Above 40"] },
        { key: "skinConcern", question: "What is your primary Skin Concern?", options: ["Acne", "Blackheads", "Dark Spots", "Pores", "Wrinkles"] },
        { key: "skinType", question: "What is your skin type?", options: ["Oily", "Dry", "Combination", "Normal", "Sensitive"] },
        { key: "sunExposure", question: "How often are you exposed to sunlight?", options: ["Rarely", "Occasionally", "Daily for 1-2 hours", "Daily for 3+ hours"] },
        { key: "makeup", question: "Do you wear makeup regularly?", options: ["Yes, daily", "Occasionally", "No"] }
    ]

    const current = questions[step]
    
    const handleAnswers = (value) => {
        const key = current.key;
        const finalAnswers = { ...answers, [key] : value };
        setAnswers(finalAnswers);

        if (step < questions.length-1){
            setStep(step+1);
        } else{
            setIsComplete(true);
        }
    }

    
    return(
        <main>

            {/* ----------- Product Finder Section -----------*/}  

            <Container>
                { !isComplete ? (
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
                        <h2 className = "recommendations">Personalised product recommendations for you</h2>
                        <p className = "recommendations">(We will use the list below as prompt for out ChatGPT API)</p>
                        {Object.entries(answers).map(([key,value]) => (
                            <ul key={key} className = "answer-list">{key}: {value}</ul>
                        ))}
                    </>
                )}
                
            </Container>

        </main>
    );

}