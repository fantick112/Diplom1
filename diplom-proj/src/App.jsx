import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Discover from "./component/Discover";
import Header from "./component/ComponentCompon/Header";
import SellNFT from "./component/SellNFT";
import { cart } from "./component/propsObj";
import { Basket } from "./component/ComponentCompon/Basket";
import Wallet from "./component/ComponentCompon/Wallet";

import "./App.css";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [nfts, setNfts] = useState(cart);
  const [baskets, setBaskets] = useState([]);
  const [isBasket, setIsBasket] = useState(false);

  function openBasket() {
    setIsBasket(true);
  }

  function closeBasket() {
    setIsBasket(false);
  }

  function btnBasket(id) {
    const product = nfts.find((item) => item.id === id);
    if (!product) return;
    setBaskets((prev) => [...prev, product]);
  }

  function removeFromBasket(id) {
    setBaskets((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Header openBasket={openBasket} baskets={baskets} />
      {isBasket && (
        <Basket
          baskets={baskets}
          removeFromBasket={removeFromBasket}
          closeBasket={closeBasket}
        />
      )}

      <Routes>
        <Route path="/" element={<Home nfts={nfts} btnBasket={btnBasket} />} />
        <Route path="/discover" element={<Discover nfts={nfts} btnBasket={btnBasket}  />} />
        <Route path="/wallet" element={<Wallet nfts={nfts} />} />

        <Route path="/sellNFT" element={<SellNFT setNfts={setNfts} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// w 1000
//
