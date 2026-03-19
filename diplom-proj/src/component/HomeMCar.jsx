import React, { useRef } from "react";
import "./Home.css";
import l from "./img/imgHome1/l.png";
import r from "./img/imgHome1/r.png";

function HomeMCar({ nfts, btnBasket }) {

  const slider = useRef(null);

  const scrollRight = () => {
    slider.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    slider.current.scrollLeft -= 300;
  };

  return (
    <div className="conteinerCart">

      <div className="titleh3" style={{display:'flex',justifyContent:'center'}}>
        <h3>Weekly - Top NFT</h3>
      </div>

      <div className="cards" ref={slider}>

        {nfts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card_img" />
            <h4>{item.name}</h4>
            <p>Current bid {item.bid}</p>
            <button onClick={()=> btnBasket(item.id)}>PLACE BID</button>
          </div>
        ))}

      </div>

      <div className="car">

        <button className="btn_slider" onClick={scrollLeft}>
          <img src={l} alt="left" />
        </button>

        <button className="btn_slider" onClick={scrollRight}>
          <img src={r} alt="right" />
        </button>

      </div>

    </div>
  );
}

export default HomeMCar;




