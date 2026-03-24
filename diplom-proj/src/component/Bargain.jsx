import React, { useState } from "react";
import Price from "./img/button/prise.png";
import "./Home.css";

function Bargain({ nfts, btnBasket }) {
  const [sortPr, setSortPr] = useState([]);
  const [sortType, setSortType] = useState("");
  const [isAsc, setIsAsc] = useState(true);

  function sortBtn(type) {
    const newIsAsc = sortType === type ? !isAsc : true;
    setIsAsc(newIsAsc);
    setSortType(type);

    const sorted = [...nfts].sort((a, b) => {
      if (type === "price") return newIsAsc ? a.bid - b.bid : b.bid - a.bid;
      if (type === "name")
        return newIsAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      return 0;
    });

    setSortPr(sorted);
  }

  return (
    <div>
      <div className="blockSort">
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Explore Marketplace
        </h3>
    <div className="sortButton"> 

      <button className="sortBtnStyle" onClick={() => sortBtn("name")}>
          Name {sortType === "name" ? (isAsc ? "↑" : "↓") : ""}
        </button>
        
      <button className="sortBtnStyle" onClick={() => sortBtn("price")}>
          <img src={Price} alt="price" /> Price{" "}
          {sortType === "price" ? (isAsc ? "↑" : "↓") : ""}
        </button>

        </div>
       
      </div>

      <div className="cardt">
        {(sortPr.length ? sortPr : nfts).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card_img" />
            <h4>{item.name}</h4>
            <p>Current bid {item.bid}</p>
            <button onClick={() => btnBasket(item.id)}>PLACE BID</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bargain;
