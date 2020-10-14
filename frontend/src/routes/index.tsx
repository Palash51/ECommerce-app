import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import  Home from './Home'
import Product from './Product';

function Base() {

  const openMenu = () => {
    document.querySelector(".sidebar")!.classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")!.classList.remove("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">Amazona</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="">Pants</a>
                </li>
                <li>
                    <a href="">Shirts</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
            <Route path="/product/:id" exact={true} component={Product} />
            <Route path="/" exact={true} component={Home} />
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default Base;
