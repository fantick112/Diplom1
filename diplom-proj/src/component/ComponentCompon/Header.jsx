import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/imglogo.svg";
import "./HeaderCss.css";

function Header({ openBasket, baskets }) {
  const [isOpen, setIsOpen] = useState(false);

  function changeOpen() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="headerConteiner">
      <div className="nav">
        <div className="headerLinck">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <Link to="/discover">Discover</Link>
          <Link to="/sellNFT">SellNFT</Link>
          <Link to="/wallet">Wallet</Link>
        </div>

        <div>
          <button className="btnWallet" onClick={openBasket}>
            🛒 Basket ({baskets.length})
          </button>
        </div>
      </div>

      <div className="container_header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav
          onClick={closeMenu}
          className={"nav-mobile " + (isOpen ? "open" : "close")}
        >
          <Link to="/" className="navMenuA">
            Home
            {/*<img src={logo} alt="logo" /> */}
          </Link>
          <a className="navMenuA" onClick={openBasket}>
            🛒 Basket ({baskets.length})
          </a>

          <Link to="/discover" className="navMenuA">
            Discover
          </Link>
          <Link to="/sellNFT" className="navMenuA">
            SellNFT
          </Link>
          <Link to="/wallet" className="navMenuA">
            Wallet
          </Link>
        </nav>

        <div className="menu_icon">
          <button
            className={"btn-menu " + (isOpen ? "open" : "close")}
            onClick={changeOpen}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
