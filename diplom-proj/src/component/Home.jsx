import React from "react";
import { pric } from "./propsObj";
import "./Home.css";
import HomeMCar from "./HomeMCar";
import Bargain from "./Bargain";
import Footer from "./Footer";
import MaimCollector from "./MaimCollector";
import SellNFT from "./SellNFT";
import { useNavigate } from "react-router-dom";

import rectangle1 from "./img/imgHome1/Rectangle3.png";
import rectangle2 from "./img/imgHome1/Rectangle3_1.png";
import group from "./img/imgHome1/gr.png";
import arrow from "./img/imgHome1/Arrow01.png";
import l from "./img/imgHome1/l.png";
import r from "./img/imgHome1/r.png";
function Home({ nfts, btnBasket }) {
  const navigator = useNavigate();
  const toCreateNav = () => {
    navigator("/sellNFT");
  };

  const toDiscover = () => {
    navigator("/Discover");
  };

  return (
    <div className="con">
      <div className="container">
        <div className="left">
          <h1>Discover And Create NFTs</h1>

          <p style={{ fontWeight: "600" }}>
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a{" "}
            <strong>
              {pric.price} {pric.title}
            </strong>
            .
          </p>

          <div className="buttonHome">
            <button className="toKnow" onClick={toDiscover}>
              Explore More
            </button>
            <button className="button_btn" onClick={toCreateNav}>
              Create NFT
            </button>
          </div>
          <div className="stats">
            <div className="stat_item">
              <h2 className="stat_number">430K+</h2>
              <p className="stat_label">Art Works</p>
            </div>

            <div className="stat_item">
              <h2 className="stat_number">159K+</h2>
              <p className="stat_label">Creators</p>
            </div>

            <div className="stat_item">
              <h2 className="stat_number">87K+</h2>
              <p className="stat_label">Collections</p>
            </div>
          </div>
        </div>

        <div className="right">
          <img className="img1" src={rectangle1} alt="" />
          <img className="img2" src={rectangle2} alt="" />
          <img className="arrow_img" src={group} alt="" />
          <img className="dots_img" src={arrow} alt="" />
          <div className="slider_buttons">
            <button className="btn_slider">
              <img src={l} alt="" />
            </button>
            <button className="btn_slider">
              {" "}
              <img src={r} alt="" />
            </button>
          </div>
        </div>
      </div>
     
      <HomeMCar nfts={nfts} btnBasket={btnBasket} />
      <Bargain nfts={nfts} btnBasket={btnBasket} />
      <MaimCollector></MaimCollector>
      
    </div>
  );
}

export default Home;
