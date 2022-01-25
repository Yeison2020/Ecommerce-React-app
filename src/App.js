import "./App.css";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";

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
    <div>
      <NavBar totalItems={cart.total_items} />
      <Products product={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
