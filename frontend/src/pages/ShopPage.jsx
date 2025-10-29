import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import {useNavigate, useParams} from "react-router-dom";
import {Row, Col, Container, Button, Nav, Navbar, Card} from "react-bootstrap"
import {useState, useEffect} from "react";
import {useCart} from "../context/CartContext";


var cleanser_products = [
    { id: 1, skin_concern: "Acne", name: "Salicylic Acid 2% Gel Cleanser", description: "Gently exfoliates and unclogs pores to treat and prevent acne.", price: 349, image: "/images/acne-cleanser.png" },
    { id: 2, skin_concern: "Blackheads", name: "AHA + BHA Foaming Cleanser", description: "Removes oil, dead skin, and debris to minimize blackheads and breakouts.", price: 299, image: "/images/blackheads-cleanser.png" },
    { id: 3, skin_concern: "Dark Spots", name: "Vitamin C Brightening Cleanser", description: "Boosts radiance and helps fade pigmentation with antioxidant support.", price: 249, image: "/images/darkspots-cleanser.png" },
    { id: 4, skin_concern: "Pores", name: "Niacinamide Pore-Refining Cleanser", description: "Balances oil production and visibly minimizes enlarged pores.", price: 279, image: "/images/pores-cleanser.png" },
    { id: 5, skin_concern: "Wrinkles", name: "Ceramide + Hyaluronic Hydrating Cleanser", description: "Cleanses without stripping moisture, strengthens the skin barrier, and supports anti-aging care.", price: 399, image: "/images/wrinkles-cleanser.png" }
];

var serum_products = [
    { id: 1, skin_concern: "Acne", name: "Niacinamide 10% + Zinc Serum", description: "Reduces acne and inflammation while controlling oil production.", price: 499, image: "/images/acne-serum.png" },
    { id: 2, skin_concern: "Blackheads", name: "Salicylic Acid 2% Exfoliating Serum", description: "Unclogs pores and prevents the formation of blackheads and whiteheads.", price: 449, image: "/images/blackheads-serum.png" },
    { id: 3, skin_concern: "Dark Spots", name: "Vitamin C 15% Brightening Serum", description: "Fades dark spots, brightens skin tone, and promotes collagen synthesis.", price: 549, image: "/images/darkspots-serum.png" },
    { id: 4, skin_concern: "Pores", name: "Niacinamide + Zinc Pore-Minimizing Serum", description: "Tightens pores, controls excess oil, and refines overall skin texture.", price: 499, image: "/images/pores-serum.png" },
    { id: 5, skin_concern: "Wrinkles", name: "Retinol 0.3% Anti-Aging Serum", description: "Boosts collagen production and reduces fine lines and wrinkles over time.", price: 599, image: "/images/wrinkles-serum.png" }
];

var moisturiser_products = [
    {id:1, skin_concern: "Acne", name: "Oil-Free Gel Moisturiser with Niacinamide", description: "Lightweight hydration that controls excess sebum and soothes acne-prone skin.", price: 499, image: "/images/acne-moisturiser.png"},
    {id:2, skin_concern: "Blackheads", name: "Water-Based Gel Cream with Green Tea", description: "Non-comedogenic moisturizer that unclogs pores and balances oil production.", price: 449, image: "/images/blackheads-moisturiser.png"},
    {id:3, skin_concern: "Dark Spots", name: "Vitamin C & Hyaluronic Acid Moisturiser", description: "Brightens dull skin while deeply hydrating to improve overall tone.", price: 549, image: "/images/darkspots-moisturiser.png"},
    {id:4, skin_concern: "Pores", name: "Niacinamide + Zinc Mattifying Moisturiser", description: "Tightens pores and gives a smooth matte finish without clogging skin.", price: 499, image: "/images/pores-moisturiser.png"},
    {id:5, skin_concern: "Wrinkles", name: "Peptide & Ceramide Rejuvenating Cream", description: "Nourishes mature skin, boosts collagen, and restores elasticity.", price: 599, image: "/images/wrinkles-moisturiser.png"}
];

var sunscreen_products = [
    {id:1, skin_concern: "Acne", name: "Mattifying Zinc Oxide Sunscreen", description: "Oil-free mineral sunscreen that protects without clogging pores.", price: 599, image: "/images/acne-sunscreen.png"},
    {id:2, skin_concern: "Blackheads", name: "Gel-Based SPF 50 Sunscreen with Green Tea", description: "Lightweight and non-comedogenic formula ideal for oily, congested skin.", price: 549, image: "/images/blackheads-sunscreen.png"},
    {id:3, skin_concern: "Dark Spots", name: "Niacinamide + Vitamin C Brightening Sunscreen", description: "Prevents pigmentation and protects against UV-induced darkening.", price: 649, image: "/images/darkspots-sunscreen.png"},
    {id:4, skin_concern: "Pores", name: "Pore-Blurring SPF 50 Sunscreen", description: "Smooth, silicone-based texture that minimizes appearance of pores.", price: 599, image: "/images/pores-sunscreen.png"},
    {id:5, skin_concern: "Wrinkles", name: "Anti-Aging SPF 50 Sunscreen with Peptides", description: "Broad spectrum UV protection that prevents fine lines and supports collagen.", price: 699, image: "/images/wrinkles-sunscreen.png"}
];


export default function ShopPage(){

    const {homeCategoryClicked} = useParams();
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState("Cleanser");

    const categoryMap = {
        "Cleanser": cleanser_products,
        "Serum": serum_products,
        "Moisturiser": moisturiser_products,
        "Sunscreen": sunscreen_products
    };

    useEffect(()=> {
        if(homeCategoryClicked){
            const formattedCategory = 
                homeCategoryClicked.charAt(0).toUpperCase() + homeCategoryClicked.slice(1).toLowerCase();
            if (categoryMap[formattedCategory]){
                setActiveCategory(formattedCategory);
            }
        }
    }, [homeCategoryClicked]);


    const handleCategoryClick = (category) => {
        setActiveCategory(category)
        navigate(`/shop/${category.toLowerCase()}`)
    };

    const [cart, setCart] = useState([])

    const {addToCart} = useCart();

    return(
        <>
        <main>

            {/* -------- Shop Navbar --------- */}

                <Container>
                    <Navbar className = "shop-page-navbar">
                        {Object.keys(categoryMap).map((category) =>(
                            <Button
                                key = {category}
                                className="shop-page-navbar-buttons px-5"
                                active = {activeCategory === category}
                                onClick = {()=> handleCategoryClick(category)}
                            >
                                {category}
                            </Button>
                        ))
                        }
                    </Navbar>
                    <div>
                        <Row className="cards-row">
                            {categoryMap[activeCategory].map(product =>(
                                <Col key = {product.id}>
                                    <Card className="shop-page-cards">
                                        <Card.Body>
                                            <Card.Title>{product.skin_concern}</Card.Title>
                                            <Card.Img src={product.image} alt={product.name} />
                                            <Card.Subtitle>{product.name}</Card.Subtitle>
                                            <Card.Text>{product.description}</Card.Text>
                                            <Card.Title>₹{product.price}</Card.Title>
                                            <Button 
                                                className="shop-page-buttons" 
                                                size="lg"
                                                onClick = {() => addToCart({...product, category: activeCategory})}
                                            >
                                                Add to Cart
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
        </main>
        </>
    )
}