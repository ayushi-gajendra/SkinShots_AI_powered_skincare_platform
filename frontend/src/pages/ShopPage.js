import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import {useNavigate} from "react-router-dom";
import {Row, Col, Container, Button, Nav, Navbar, Card} from "react-bootstrap"

import AppNavbar from "../components/Navbars"
import AppFooter from "../components/Footer"


var cleanser_products = [
    { id: 1, skin_concern: "Acne", name: "Salicylic Acid 2% Gel Cleanser", description: "Gently exfoliates and unclogs pores to treat and prevent acne.", price: "₹349" },
    { id: 2, skin_concern: "Blackheads", name: "AHA + BHA Foaming Cleanser", description: "Removes oil, dead skin, and debris to minimize blackheads and breakouts.", price: "₹299" },
    { id: 3, skin_concern: "Dark Spots", name: "Vitamin C Brightening Cleanser", description: "Boosts radiance and helps fade pigmentation with antioxidant support.", price: "₹249" },
    { id: 4, skin_concern: "Pores", name: "Niacinamide Pore-Refining Cleanser", description: "Balances oil production and visibly minimizes enlarged pores.", price: "₹279" },
    { id: 5, skin_concern: "Wrinkles", name: "Ceramide + Hyaluronic Hydrating Cleanser", description: "Cleanses without stripping moisture, strengthens the skin barrier, and supports anti-aging care.", price: "₹399" }
];

var serum_products = [
    { id: 1, skin_concern: "Acne", name: "Niacinamide 10% + Zinc Serum", description: "Reduces acne and inflammation while controlling oil production.", price: "₹499" },
    { id: 2, skin_concern: "Blackheads", name: "Salicylic Acid 2% Exfoliating Serum", description: "Unclogs pores and prevents the formation of blackheads and whiteheads.", price: "₹449" },
    { id: 3, skin_concern: "Dark Spots", name: "Vitamin C 15% Brightening Serum", description: "Fades dark spots, brightens skin tone, and promotes collagen synthesis.", price: "₹549" },
    { id: 4, skin_concern: "Pores", name: "Niacinamide + Zinc Pore-Minimizing Serum", description: "Tightens pores, controls excess oil, and refines overall skin texture.", price: "₹499" },
    { id: 5, skin_concern: "Wrinkles", name: "Retinol 0.3% Anti-Aging Serum", description: "Boosts collagen production and reduces fine lines and wrinkles over time.", price: "₹599" }
];

var moisturiser_products = [
    {id:1, skin_concern: "Acne", name: "Oil-Free Gel Moisturizer with Niacinamide", description: "Lightweight hydration that controls excess sebum and soothes acne-prone skin.", price: "₹499"},
    {id:2, skin_concern: "Blackheads", name: "Water-Based Gel Cream with Green Tea", description: "Non-comedogenic moisturizer that unclogs pores and balances oil production.", price: "₹449"},
    {id:3, skin_concern: "Dark Spots", name: "Vitamin C & Hyaluronic Acid Moisturizer", description: "Brightens dull skin while deeply hydrating to improve overall tone.", price: "₹549"},
    {id:4, skin_concern: "Pores", name: "Niacinamide + Zinc Mattifying Moisturizer", description: "Tightens pores and gives a smooth matte finish without clogging skin.", price: "₹499"},
    {id:5, skin_concern: "Wrinkles", name: "Peptide & Ceramide Rejuvenating Cream", description: "Nourishes mature skin, boosts collagen, and restores elasticity.", price: "₹599"}
];

var sunscreen_products = [
    {id:1, skin_concern: "Acne", name: "Matte Finish Sunscreen with Zinc Oxide", description: "Oil-free mineral sunscreen that protects without clogging pores.", price: "₹599"},
    {id:2, skin_concern: "Blackheads", name: "Gel-Based SPF 50 Sunscreen with Green Tea", description: "Lightweight and non-comedogenic formula ideal for oily, congested skin.", price: "₹549"},
    {id:3, skin_concern: "Dark Spots", name: "Niacinamide + Vitamin C Brightening Sunscreen", description: "Prevents pigmentation and protects against UV-induced darkening.", price: "₹649"},
    {id:4, skin_concern: "Pores", name: "Pore-Blurring SPF 50 Sunscreen", description: "Smooth, silicone-based texture that minimizes appearance of pores.", price: "₹599"},
    {id:5, skin_concern: "Wrinkles", name: "Anti-Aging SPF 50 Sunscreen with Peptides", description: "Broad spectrum UV protection that prevents fine lines and supports collagen.", price: "₹699"}
];

const products = [cleanser_products, serum_products, moisturiser_products, sunscreen_products]


export default function ShopPage(){

    const navigate= useNavigate();

    return(
        <>
        <main>
            {/* ------- Navbar Section -------- */}
				<AppNavbar />

            {/* -------- Shop Navbar --------- */}

                <Container>
                    <Navbar>
                        <Nav.Link>Cleanser</Nav.Link>
                        <Nav.Link>Serum</Nav.Link>
                        <Nav.Link>Moisturiser</Nav.Link>
                        <Nav.Link>Sunscreen</Nav.Link>
                    </Navbar>
                    <div>
                        <Row>
                            {cleanser_products.map(product =>(
                                <Col key = {product.id}>
                                    <Card className="shop-page-cards">
                                        <Card.Body>
                                            <Card.Title>{product.skin_concern}</Card.Title>
                                            <Card.Img>{product.image}</Card.Img>
                                            <Card.Subtitle>{product.name}</Card.Subtitle>
                                            <Card.Text>{product.description}</Card.Text>
                                            <Button className="shop-page-buttons" variant="outline-dark" size="lg">Add to Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>

            {/* ----------- Footer -----------*/}  
                <AppFooter />
        </main>
        </>
    )
}