import React from "react";
import { cart } from "./propsObj";
import "./Home.css";

function Bargain({nfts,  btnBasket}) {

  return (
    <>
      <div>
        <div>
        <h3 style={{display: 'flex', justifyContent: 'center'}}>Explore Marketplace</h3>
        </div>
      
      <div className="cardt">
        {nfts.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} className="card_img" />
              <h4>{item.name}</h4>
              <p>Current bid {item.bid}</p>
              {/* !PLACE */}
              <button onClick={()=> btnBasket(item.id)}>PLACE BID</button>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
export default Bargain;


