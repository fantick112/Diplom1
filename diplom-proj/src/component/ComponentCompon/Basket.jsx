import React from "react";
import "./HeaderCss.css";

export const Basket = ({ baskets = [], removeFromBasket, closeBasket }) => {
  function getDate() {
    const now = new Date();
    return now.toLocaleDateString();
  }

  const total = baskets.reduce((sum, item) => sum + Number(item.bid), 0);

  return (
    <div className="basket-g" onClick={closeBasket}>
      <div className="basket-c" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeBasket}>
          ✕
        </button>

        <h4>History of Bid</h4>
        <p>{getDate()}</p>

        {baskets.length === 0 ? (
          <p>Basket is empty</p>
        ) : (
          <div className="basket-g-c">
            {baskets.filter(Boolean).map((item, i) => (
              <div className="basket-item" key={item.id + i}>
                <img src={item.image} alt={item.name} />

                <div className="basket-info">
                  <h5>{item.name}</h5>
                </div>

                <div className="bid">{item.bid}</div>

                <button
                  className="delete-btn"
                  onClick={() => removeFromBasket(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <h3 className="total">Total: {total} ETH</h3>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

/*import "./Basket.css"
import "./HeaderCss.css";

export const Basket = ({ baskets, removeFromBasket }) => {

  function getDate(){
    const now = new Date();
    return now.toLocaleDateString();
  }

  return (
    <div className="basket-g">
      <div className="basket-c">

        <h4>History of Bid</h4>
        <p>{getDate()}</p>

        {baskets.length === 0 ? (
          <p>Basket is empty</p>
        ) : (
          baskets.map(item => (
            <div className="basket-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="basket-info">
                <h5>{item.name}</h5>
                <span>Current bid</span>
              </div>

              <div className="bid">
                {item.bid}
              </div>

              <button
                className="delete-btn"
                onClick={() => removeFromBasket(item.id)}
              >
                ✕
              </button>

            </div>
          ))
        )}

        <button className="submit-btn">
          Submit
        </button>

      </div>
    </div>
  );
};*/
