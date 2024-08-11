import "./Footer.css";
// Icons
import Facebook from "../../assets/icons/facebook-icon.svg";
import Twitter from "../../assets/icons/twitter-icon.svg";
import Instagram from "../../assets/icons/instagram-icon.svg";
import Youtube from "../../assets/icons/youtube-icon.svg";
// Components
import BoxFromTheBlog from "./components/boxFromTheBlog/boxFromTheBlog";

export default function Footer() {
    const numberOfComments: number = 3;

  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-container-firstBoxer">
            <span className="footer-container-firstBoxer-boxTitleAndDescription">
              <h3 className="footer-container-firstBoxer-boxTitleAndDescription-title">
                URBAN OUTFITTERS
              </h3>
              <p className="footer-container-firstBoxer-boxTitleAndDescription-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </span>
            <span className="footer-container-firstBoxer-boxContacts">
              <p className="footer-container-firstBoxer-boxContacts-location">
                121 king street, Melbourne 3000
              </p>
              <p className="footer-container-firstBoxer-boxContacts-number">
                +61 3 8376 6284
              </p>
              <p className="footer-container-firstBoxer-boxContacts-email">
                contact@urbanoutfitters.com
              </p>
            </span>
            <span className="footer-container-firstBoxer-socialNetworks">
              <img
                src={Facebook}
                alt="Icon for Facebook"
                className="FacebookIcon"
              />
              <img
                src={Twitter}
                alt="Icon for Twitter"
                className="TwitterIcon"
              />
              <img
                src={Instagram}
                alt="Icon for Instagram"
                className="InstagramIcon"
              />
              <img
                src={Youtube}
                alt="Icon for Youtube"
                className="YoutubeIcon"
              />
            </span>
          </div>
          <div className="footer-container-secondBoxer">
            <h4 className="footer-container-secondBoxer-title">SHOPPING</h4>
            <span className="footer-container-secondBoxer-box">
              <a href="#" className="footer-container-secondBoxer-box-routers">
                You cart
              </a>
              <a href="#" className="footer-container-secondBoxer-box-routers">
                You orders
              </a>
              <a href="#" className="footer-container-secondBoxer-box-routers">
                Compare items
              </a>
              <a href="#" className="footer-container-secondBoxer-box-routers">
                Wishlist items
              </a>
              <a href="#" className="footer-container-secondBoxer-box-routers">
                Shipping detail{" "}
              </a>
            </span>
          </div>
          <div className="footer-container-thirdBoxer">
            <h4 className="footer-container-thirdBoxer-title">MORE LINK</h4>
            <span className="footer-container-thirdBoxer-boxRouters">
              <a
                href="#"
                className="footer-container-thirdBoxer-boxRouters-routers"
              >
                Blog
              </a>
              <a
                href="#"
                className="footer-container-thirdBoxer-boxRouters-routers"
              >
                Gift Center
              </a>
              <a
                href="#"
                className="footer-container-thirdBoxer-boxRouters-routers"
              >
                Buying Guides
              </a>
              <a
                href="#"
                className="footer-container-thirdBoxer-boxRouters-routers"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="footer-container-thirdBoxer-boxRouters-routers"
              >
                Clearence
              </a>
            </span>
          </div>
          <div className="footer-container-fourthBoxer">
            <h4 className="footer-container-fourthBoxer-title">
              FROM THE BLOG
            </h4>
            <span className="footer-container-fourthBoxer-boxeMoreOfBlog">
              <BoxFromTheBlog text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." date="26 May" comments={numberOfComments + " comments"} />
              
              <BoxFromTheBlog text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." date="26 May" comments={numberOfComments + " comments"} />


            </span>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright-text">
            Urban Outfitters © – All rights reserved{" "}
          </p>
        </div>
      </section>
    </>
  );
}
