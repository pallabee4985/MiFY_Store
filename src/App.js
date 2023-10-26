import React from 'react'
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Header/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/Header/About/About';
import Contact from './Component/Header/Contact/Contact';
import Product from './Component/Product';
import Login from './Component/Header/Login/Login';
import Register from './Component/Header/Register/Register';
import Cart from "./Component/Header/Cart/Cart"
import Profile from './Component/Header/Profile/Profile';
import SingleProduct from './Component/SingleProduct';
import Error from "./Component/CommonComponent/Error"

function App() {
  return (
    <div className="App">
      
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Error/>}/>
            </Routes>
          <Footer/>
      
    </div>
  );
}

export default App;
