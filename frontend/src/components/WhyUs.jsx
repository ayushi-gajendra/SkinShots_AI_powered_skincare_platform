import { Container } from "react-bootstrap";


export default function AppWhyUs(){
    return(
        <section>
            <Container>
                <h2 className= "why-us">Why Us</h2>
                <div>
                    <p className= "why-para">“Your Skin, Our Science.”</p>
                    <p className= "why-para">
                        At SkinShots, we combine dermatology expertise with cutting-edge AI technology to deliver skincare that truly understands you. 
                        From personalized product recommendations to advanced skin analysis, every solution is backed by science and tailored for your unique needs. 
                        Trusted ingredients, transparent results, and a commitment to healthy, glowing skin—because you deserve nothing less.
                    </p>
                </div>
            </Container> 
        </section>
    )
}