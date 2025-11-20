import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import {useNavigate, useParams} from "react-router-dom";
import {Row, Col, Container, Button, Nav, Navbar, Card} from "react-bootstrap"
import {useState, useEffect} from "react";
import {useCart} from "../context/CartContext";


export default function ShopPage(){

    const {homeCategoryClicked} = useParams();
    const {addToCart} = useCart();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Cleanser");
  
    // If we are navigating from home page
    useEffect(()=>{
        if(homeCategoryClicked){
            const formattedCategory = homeCategoryClicked.charAt(0).toUpperCase() + homeCategoryClicked.slice(1).toLowerCase()
            setActiveCategory(formattedCategory)
        }  
    }, [homeCategoryClicked]);    
    
    // To set the products
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async() => {
            try{
                const res = await fetch("http://127.0.0.1:5000/api/products/");
                const data = await res.json();
                setProducts(data);
            } catch (error){
                console.error("Error fetching products", error);
            }
        };

    const categories = [...new Set(products.map(p => p.category))]
    const filteredProducts = products.filter(p => p.category === activeCategory)

    // If the category button is clicked 
    const handleCategoryClick=(category)=>{
        setActiveCategory(category);
        navigate(`/shop/${category.toLowerCase()}`);
    }


    return(
        <>
        <main>

            <Container>
                <Navbar className = "shop-page-navbar">
                    {categories.map(category =>(
                        <Button
                            key = {category}
                            className="shop-page-navbar-buttons px-5"
                            active = {activeCategory === category}
                            onClick = {()=> handleCategoryClick(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </Navbar>
                <div>
                    <Row className="cards-row">
                        {filteredProducts.map(product =>(
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
                                            onClick = {() => addToCart(product)}
                                            //onClick = {() => addToCart({...product, category: activeCategory})}
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