import {useContext, createContext, useState, useEffect} from "react"


const CartContext = createContext()

export function CartProvider({children}){

    const [cart, setCart] = useState(()=>{
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev)=>{
            const idx = prev.findIndex(p => p.id === product.id && 
                p.category === product.category);
            if (idx !== -1) {
                const copy = [...prev];
                copy[idx] = {...copy[idx], quantity: copy[idx].quantity+1};
                return copy;
            }return [...prev, {...product, quantity: 1}];
        });
    };

    const removeFromCart = (id,category) => {
        setCart(prev => prev.filter(item => !(item.id === id && item.category === category)));
    };

    const updateQuantity = (id, category, quantity) => {
        setCart(prev => prev.map(item => item.id === id && 
            item.category === category ? {...item, quantity}: item));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotal = () => cart.reduce((s,item) => s + item.price * item.quantity, 0);

    return(
        <CartContext.Provider value = {{cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}
