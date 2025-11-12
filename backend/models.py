from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone
from werkzeug.security import generate_password_hash, check_password_hash


db = SQLAlchemy()

# User 1 — * Order 1 — * OrderItem * — 1 Product
# A User places an Order → Each Order contains multiple OrderItems → Each OrderItem references one Product.


class Product(db.Model):
    __tablename__ = "product"

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50))
    skin_concern = db.Column(db.String(20))
    name = db.Column(db.String(120))
    description = db.Column(db.Text)
    price = db.Column(db.Integer)
    image = db.Column(db.String(255))

    # Relationship: one product can be in many order items (1-*)
    order_items = db.relationship("OrderItem", back_populates="product") #reverse relationship name on OrderItem


class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    # Relationship: one user can have many orders (1-*)
    orders = db.relationship("Order", back_populates="user") #reverse relationship name on Order 

    # Secure password setup (hashing)
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    # Secure password verification (comparison)
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Order(db.Model):
    __tablename__ = "order"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    total = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    status = db.Column(db.String(20), default="Pending")
    payment_method = db.Column(db.String(50))
    payment_status = db.Column(db.String(20), default="Unpaid")
    address = db.Column(db.String(255))

    # Relationships
    user = db.relationship("User", back_populates="orders")         # (*-1)
    items = db.relationship("OrderItem", back_populates="order")    # (1-*)
    

class OrderItem(db.Model):
    __tablename__ = "order_item"

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("order.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)       # price at purchase time

    # Relationships
    order = db.relationship("Order", back_populates="items")   
    product = db.relationship("Product", back_populates="order_items")

