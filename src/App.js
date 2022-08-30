import React, { useEffect, useState } from 'react';
import './assets/global.style.scss';
import { Route, Routes, useParams } from 'react-router-dom';

// Import Components

import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer';

// Import Pages
import Home from './page/home/home';
import AboutUs from './page/aboutUs/aboutUs';
import Blog from './page/blog/blog';
import Contact from './page/contact/contact';
import Login from './page/login/login';
import ProductCategory from './page/productCategory/productCategory';
import ProductDetail from './page/productDetail/productDetail';
import Sign from './page/sign/sign';
import Checkout from './page/checkout/checkout';
import Complete from './page/check_complete';
import NotFound from './components/404/404';

const localStg = () => {
  const localStg = localStorage.getItem('inCart');

  if(localStg) {
    return JSON.parse(localStorage.getItem('inCart'));
  } else {
    return []
  }
}

function App() {
  const [cartItem, setCartItem] = useState(localStg());
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
      const sum = cartItem.reduce(function(a, b) {return a + (b.cost * b.quantity)}, 0);
      const nearSum = Math.round(sum);
      setTotalPrice(nearSum);
  }, [cartItem])

  const addInCart = async(product, detailQuantity) => {
    const exist = cartItem.find(x => x._id === product._id);

    if(exist) {
      if(detailQuantity >= 1) {
        setCartItem(
          cartItem.map((x) => 
            x._id === product._id ? {...exist, quantity: detailQuantity} : x
          )
        );
      } else {
        setCartItem(
          cartItem.map((x) => 
            x._id === product._id ? {...exist, quantity: exist.quantity + 1} : x
          )
        );
      }
    } else {
      setCartItem([...cartItem, {...product, quantity: detailQuantity ? detailQuantity : 1}])
    }
  }

  const removeFromCart = async(product) => {
    const exist = cartItem.find(x => x._id === product._id);

    if(await exist.quantity === 1) {
      setCartItem(cartItem.filter(x => x._id !== product._id))
    } else {
      setCartItem(
        cartItem.map((x) => x._id === product._id ? {...exist, quantity: exist.quantity - 1} : x)
      )
    }
  }

  useEffect(() => {
    localStorage.setItem('inCart', JSON.stringify(cartItem));
  }, [cartItem])

  return (
    <React.Fragment>
     <div className='wrapped'>
        <header>
          <Navigation cartItem={cartItem} removeFromCart={removeFromCart} totalPrice={totalPrice}/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home addInCart={addInCart}/>}/>
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact'element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/productCategory/:kind' element={<ProductCategory addInCart={addInCart}/>} />
            <Route path='/productDetail/:id' element={<ProductDetail addInCart={addInCart}/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout/complete' element={<Complete totalPrice={totalPrice}/>} />
            <Route path='/sign' element={<Sign />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
     </div>
    </React.Fragment>
  );
}

export default App;
