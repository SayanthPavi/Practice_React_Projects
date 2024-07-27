import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])
 
  return (
    <>
      <BrowserRouter>
      <Header cart={cart} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}  />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
