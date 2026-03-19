import React from "react";
import "./Wallet.css";
import imgWallet from "../img//imgHome1/rectangle3.png";
import logo from "../img/logo/imglogo.svg";
import lisa from "../img/wallet/lisa.png";
import image2 from "../img/wallet/image2.png";
import bx_link from "../img/wallet/bx_link-alt.png";
import ico from "../img/wallet/icon.png";
import { Link } from "react-router-dom";

function Wallet() {
  return (
    <div className="conteinerWallet">
      
        <div className="left-contein">
          <h2>Choose Wallet</h2>
          <ul>
            <li className="walletItem">
              <a
                href="https://metamask.io/ru/nft"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lisa} alt="metamask" />
                <span>Metamask</span>
                <img src={ico} alt="arrow" />
              </a>
            </li>
            <li className="walletItem">
              <a
                href="https://trustwallet.com/ru?utm_source=cryptwerk"
                target="_blank"
                rel="noreferrer"
              >
                <img src={image2} alt="Trust Wallet" />
                <span>Trust Wallet</span>
                <img src={ico} alt="arrow" />
              </a>
            </li>

            <li className="walletItem">
              <a href="#">
                <img src={bx_link} alt="link" />
                <span>Enter ethereum address</span>
                <img src={ico} alt="arrow" />
              </a>
            </li>
          </ul>

          <div>
            <button className="btn-next">NEXT</button>
          </div>
        </div>
     
     

      <div className="right-contein">
        <img src={imgWallet} alt="img" className="walletImg" />
        <div className="text">
          <h1>Start Your Own NFT Gallery</h1>
          <p>
            CloseSea Is A Great Platform For Discover Largest NFTs And Other
            Stuff !!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Wallet;
