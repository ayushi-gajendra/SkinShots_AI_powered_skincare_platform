import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

var products = [
		{id: 1, name: "Cleanser", image:"/images/product1.png"},
		{id: 2, name: "Serum", image:"/images/product2.png"},
		{id: 3, name: "Moisturiser", image:"/images/product3.png"},
		{id: 4, name: "Sunscreen", image:"/images/product4.png"},
	];


export default function AppShop(){

	const navigate = useNavigate();

    return(
        <section>
			<Container>
				<h2 className="shop-heading text-center">Customise Your Skincare Regimen</h2>
				<Row>
					{products.map(product =>(	
						<Col key={product.id}>
							<Card>
                                <div>
                                    <Card.Body className="shop-products text-center">
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Img src={product.image}/>
                                        <Button 
											className="shop-buttons" 
											variant="outline-dark"
											onClick = { ()=> navigate(`/shop/${product.name.toLowerCase()}`) }
										>
											Shop Now
										</Button>
                                    </Card.Body>
                                </div>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
    )
}