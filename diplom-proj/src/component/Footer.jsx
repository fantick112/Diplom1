import q from "./img/footer/f.png";
import logoF from "./img/logo.png";
import insta from "./img/message/insta.png";
import twitter from "./img/message/twitter.png";
import facebook from "./img/message/facebook.png";
import ini from "./img/message/in.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const toExplore = () => {
    navigate("/discover");
    window.scrollTo(0, 0);
  };
  const toSellNFT = () => {
    navigate("/SellNFT");
  };

  return (
    <div className="conteinerFooter">
      <div className="footerCreate">
        <div className="footerCreateInfo">
          <h3 style={{ color: "#FFFFFF" }}>Create and Sell NFTs</h3>
          <p style={{ color: "#D4D4D4" }}>World’s Largest NFT Place</p>

          <div className="foonerCreateBtn">
            <button className="foonerCreateBtnBtn" onClick={toExplore}>
              Explore More
            </button>
            <button className="foonerCreateBtnBtn" onClick={toSellNFT}>
              Sell Artwork
            </button>
          </div>
        </div>

        <div className="footerNFT">
          <img src={q} alt="decor" className="footerImgFoot" />
        </div>
      </div>

      <div className="footer">
        <div className="footerNav">
          <a href="#">
            <img src={logoF} alt="logo" />
          </a>

          <div className="footerLinck">
            <a href="#">Privacy Policy</a>
            <a href="#">Term & Conditions</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <hr style={{ backgroundColor: "#818181" }} />

        <div className="footerMessage">
          <p>© 2023 EATLY All Rights Reserved.</p>

          <div className="messageImg">
            <a href="#">
              <img src={insta} alt="instagram" />
            </a>
            <a href="#">
              <img src={ini} alt="linkedin" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="footerMediaMob">
        <div className="footerCOnt">
          <div className="footerModMessag">
            <a href="#">
              <img src={logoF} alt="logo" className="logoFooterMob" />
            </a>
            <div className="messageImg">
              <a href="#">
                <img src={insta} alt="instagram" />
              </a>
              <a href="#">
                <img src={ini} alt="linkedin" />
              </a>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>

          <div className="footerMobilMenu">
            <div className="footerLinck">
              <a href="#">Privacy Policy</a>
              <a href="#">Term & Conditions</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <hr />
          <div style={{ textAlign: "center" }}>
            <p>© 2023 EATLY All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
