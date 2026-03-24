import React from "react";
import oki from "./img/footer/ok.png";
import r from "./img/imgHome1/r.png";
import Rotation1 from "./img/footer/righ/im2.png";
import Best from "./img/footer/righ/im1.png";
import Viewed2 from "./img/footer/righ/im3.png";
import q from "./img/footer//f.png";
import { useNavigate } from "react-router-dom";

function MaimCollector() {
    const navigate = useNavigate();
 
   const toExplore = () => {
     navigate("/discover");
   }
   
 



  return (
    <div className="conteinerFooter" >
      <hr />
      <div className="containerInfoFooter">{/* */}
        <div className="recommendations">
          <div>
            <h3>Just Unleash - Your Inner Collector</h3>
            <ul className="ulCart">
              <li>
                <img src={oki} alt="ok" /> Best Seller All Around World
              </li>
              <li>
                <img src={oki} alt="ok" /> $2M+ Transections Every Day
              </li>
              <li>
                <img src={oki} alt="ok" /> Secure Transactions
              </li>
              <li>
                <img src={oki} alt="ok" /> Exclusive Collections From Sellers
              </li>
              <li>
                <img src={oki} alt="ok" /> Easy Buying and Selling
              </li>
              <li>
                <img src={oki} alt="ok" /> Join Our Community
              </li>
            </ul>
            <div className="footerBtnExport">
              <button className="toKnow" onClick={toExplore}>
                Explore Mor <img src={r} alt="r" />
              </button>
            </div>
          </div>
        </div>
        <div className="footerRight">
          <img
          className="img_best"
            src={Best}
            alt="Best"
           
          />
          <img
          className="Img_rotation"
            src={Rotation1}
            alt="Rotation1"
           
          />
          <img
          className="img_viewed"
            src={Viewed2}
            alt="Viewed2"
           
          />
        </div>
      </div>



          {/**/}
          <div className="mobill">
             <h3><span>Just Unleash -</span><br /> Your Inner Collector</h3>
             
                  <div className="footerMobill">
          <img
          className="img_best1"
            src={Best}
            alt="Best"
           
          />
          <img
          className="Img_rotation2"
            src={Rotation1}
            alt="Rotation1"
           
          />
          <img
          className="img_viewed3"
            src={Viewed2}
            alt="Viewed2"
           
          />
        </div>
              <button className="toKnowMobill" onClick={toExplore}>
                Explore Mor <img src={r} alt="r" />
              </button>
          </div>
    </div>
  );
}

export default MaimCollector;
