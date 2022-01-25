import "./App.css";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./components/CheckoutForm/Checkout/CheckOut";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fecthCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {
      quantity: quantity,
    });
    setCart(cart);
    console.log(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fecthCart();
  }, []);

  console.log(products);

  console.log(cart);
  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQuantity={handleUpdateCartQuantity}
                handleEmptyCart={handleEmptyCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/"
            element={
              <Products product={products} handleAddToCart={handleAddToCart} />
            }
          />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
