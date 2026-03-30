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
    setBaskets((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        const product = nfts.find((item) => item.id === id);
        if (!product) return prev;

        const newItem = {
          ...product,
          basketId: Date.now() + Math.random(),
          quantity: 1,
        };

        return [...prev, newItem];
      }
    });
  }

  function removeFromBasket(basketId) {
    setBaskets((prev) => prev.filter((item) => item.basketId !== basketId));
  }

  function deleteBasket() {
    setBaskets([]);
  }

  function minuss(id) {
    setBaskets((prev) =>
      prev.map((item) =>
        item.basketId === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  }

  function plus(id) {
    setBaskets((prev) =>
      prev.map((item) =>
        item.basketId === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  return (
    <div>
      <Header openBasket={openBasket} baskets={baskets} />
      {isBasket && (
        <Basket
          plus={plus}
          minuss={minuss}
          deleteBasket={deleteBasket}
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
