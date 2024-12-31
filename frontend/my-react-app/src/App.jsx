/*import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import ProductsList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EcommerceNavbar from './components/SearchBar';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  

  return (

    <>
      <EcommerceNavbar/>
      <Routes>
        <Route path="/" element={<ProductsList/>}/>
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="/" element={<Cart/>}/>
      </Routes>
    </>
    //<div>Hello</div>
  );
}

export default App
*/

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/Home";
import ProductSearch from "./components/ProductSearch";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderHistory from "./components/OrderHistory";
import TrackOrder from "./components/TrackOrder";
import NavScrollExample from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/track-order" element={<TrackOrder />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
};
export default App;
