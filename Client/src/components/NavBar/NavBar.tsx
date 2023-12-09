import './NavBar.css'
//? Icons
import Search from "../../assets/icons/search.svg";
import Bag from "../../assets/icons/bag.svg";
import Heath from "../../assets/icons/heath.svg";
import User from "../../assets/icons/user.svg";

export default function NavBar() {
  return (

      <section className="NavBar">
        <section className="NavBar-container1">
          <div className="NavBar-container1-box1">
            <p className="logo">MOODY STUDIO</p>
          </div>
          <div className="NavBar-container1-box2">
            <img src={Search} alt="pesquisa"  className="icons" />
            <img src={User} alt="usuario" className="icons" />
            <img src={Bag} alt="carrinho" className="icons carrinho" id="carrinho"/>
            <img src={Heath} alt="favoritos" className="icons" />
          </div>
        </section>
        <span className="row"></span>
        <section className="NavBar-container2">
          <p className="NavBar-container2-links">HOME</p>
          <p className="NavBar-container2-links">STORE</p>
          <p className="NavBar-container2-links">ACESSORIES</p>
          <p className="NavBar-container2-links">BRAND</p>
          <p className="NavBar-container2-links">PAGES</p>
          <p className="NavBar-container2-links">ABOUT US</p>
          <p className="NavBar-container2-links">NEWS</p>
          <p className="NavBar-container2-links">CONTACT US</p>
        </section>
        <span className="row"></span>
      </section>
  );
}
