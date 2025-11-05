import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import React from "react";
import {useCart} from "../context/CartContext";
import {Button, Image, Row, Col, Container,Card} from "react-bootstrap";


export default function CheckoutPage() {

  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart();

  const handleCheckout = async () => {
    alert("Checkout coming soon!");
  };

  return (
    <Container>
        <div className="checkout-page">
            <h2>Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ): (
            <>
                {cart.map ((item)=>(
                    <Card className = "checkout-products" key={`${item.id}-${item.category}`}>
                        <Row className = "align-items-center">
                            <Col>
                                <Image src={item.image} alt={item.name} className="checkout-product-images" rounded fluid />
                            </Col>
                            <Col>
                                <strong>{item.name}</strong>
                                <p className="text-muted">{item.category}</p>
                            </Col>
                            <Col>
                                <div className="quantity-section">
                                    <Button
                                        className="quantity-change-button"
                                        variant="outline-dark"
                                        size="sm"
                                        onClick={() => 
                                            updateQuantity(item.id, item.category, item.quantity-1)
                                        }
                                        disabled={item.quantity<=1}
                                    >
                                        -
                                    </Button>

                                    <span className="quantity-text">{item.quantity}</span>

                                    <Button
                                        className="quantity-change-button"
                                        variant="outline-dark"
                                        size="sm"
                                        onClick={() => 
                                            updateQuantity(item.id, item.category, item.quantity+1)
                                        }
                                        disabled={item.quantity>=10}
                                    >
                                        +
                                    </Button>
                                </div>
                            </Col>
                            <Col>
                                <strong>{item.price * item.quantity}</strong>
                            </Col>
                            <Col>
                                <Button
                                    className="product-del-button"
                                    size="sm"
                                    onClick={() =>
                                        removeFromCart(item.id, item.category)
                                    }
                                >
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                ))
                }
                <Card  className="checkout-section">
                    <Row>
                        <h3 className="checkout-total">Total: ₹{getTotal()}</h3>
                    </Row>
                    <Row>
                        <Button 
                                className="checkout-button"
                                size="lg"
                                onClick={handleCheckout}
                        >
                            Pay Securely
                        </Button>
                    </Row>
                </Card>
                
            </>
            )
            }
        </div>
    </Container>
  );
}

