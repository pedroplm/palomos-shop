import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="palomos-shop/" element={<Shop />} />
            <Route path="palomos-shop/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
