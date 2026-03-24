import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Discover from "./component/Discover";
import Header from "./component/ComponentCompon/Header";
import SellNFT from "./component/SellNFT";
import { cart } from "./component/propsObj";
import { Basket } from "./component/ComponentCompon/Basket";
import Wallet from "./component/ComponentCompon/Wallet";
import ScrollToTop from "./component/ScrollToTop";

import "./App.css";
import Footer from "./component/Footer";
import { use, useState } from "react";

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

    const newItem = {
      ...product,
      basketId: Date.now() + Math.random(), // уникальный id
    };

    setBaskets((prev) => [...prev, newItem]);
  }
  function removeFromBasket(basketId) {
    setBaskets((prev) => prev.filter((item) => item.basketId !== basketId));
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
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home nfts={nfts} btnBasket={btnBasket} />} />
        <Route
          path="/discover"
          element={<Discover nfts={nfts} btnBasket={btnBasket} />}
        />
        <Route path="/wallet" element={<Wallet nfts={nfts} />} />
        <Route path="/sellNFT" element={<SellNFT setNfts={setNfts} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
