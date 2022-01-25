import "./App.css";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  console.log(products);
  return (
    <div>
      <NavBar />
      <Products product={products} />
    </div>
  );
}

export default App;
