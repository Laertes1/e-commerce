import "./home.css";
//? Icons
import Card from "../../assets/icons/card.svg";
import Car from "../../assets/icons/car.svg";
import Phone from "../../assets/icons/headPhone.svg";
//? Imagens
import Chair from "../../assets/images/poltrona.svg";
import Image1 from "../../assets/images/image 3.svg";
import Image2 from "../../assets/images/image 4.svg";
import Image3 from "../../assets/images/Rectangle 6.svg";
import Image4 from "../../assets/images/Rectangle 12.svg"
import Image5 from "../../assets/images/Rectangle 11.svg"
import Image6 from "../../assets/images/Rectangle 10.svg"
import Image7 from "../../assets/images/Rectangle 7.svg"
import Image8 from "../../assets/images/Rectangle 8.svg"


//? Components
import { Button } from "../../components/buttons/Button";
import ProductType1 from "../../components/BoxesOfProduts/largeBox/largeBox";
import SmallBoxe from "../../components/BoxesOfProduts/smallBoxe/smallBoxe";
export default function home() {
  return (
    <section className="main-containerPrincipal">
      <section className="main-containerPrincipal-container1">
        <div className="main-containerPrincipal-container1-boasPraticasDaEmpresa">
          <span className="main-containerPrincipal-container1-boasPraticasDaEmpresa-boxes container1">
            <img src={Car} alt="entrega" />
            <p className="main-containerPrincipal-container1-boasPraticasDaEmpresa-boxes-paragraph">
              FREE SHIPPING
            </p>
          </span>
          <span className="main-containerPrincipal-container1-boasPraticasDaEmpresa-boxes box2">
            <img src={Card} alt="pagamento" />
            <p className="main-containerPrincipal-container1-boasPraticasDaEmpresa-boxes-paragraph">
              100% MONEY BACK
            </p>
          </span>
          <span className="main-containerPrincipal-container1-boasPraticasDaEmpresa-boxes box3">
            <img src={Phone} alt="Atendimento" />
            <p className="main-containerPrincipal-container1-boasPraticasDaEmpresa-boxes-paragraph">
              SUPPORT 24/7
            </p>
          </span>
        </div>
      </section>
      {/* //! Banner */}

      {/* //! Para essa parte devera ter uma forma do dono do e-commerce adicionar todos esses valores, incluindo: A imagem, textos e a cor de fundo.  */}
      <section className="main-containerPrincipal-container2">
        {/*//? Div na qual ficara a imagem*/}
        <div className="main-containerPrincipal-container2-box1">
          <img
            src={Chair}
            alt="Imagem principal"
            className="main-containerPrincipal-container2-imagem"
          />
        </div>
        <div className="main-containerPrincipal-container2-box2">
          <span className="main-containerPrincipal-container2-box2-span1">
            <p className="main-containerPrincipal-container2-box2-paragraph">
              HOT DEALS THIS WEEK
            </p>
            <h1 className="main-containerPrincipal-container2-box2-title">
              SALE UP 50% MODERN FURNITURE
            </h1>
          </span>

          <Button texto="VIEW NOW" />
        </div>
      </section>
      {/*//! Final da parte do banner */}
      <section className="main-containerPrincipal-container3">
        <ProductType1
          //! Essas propiedades abaixo deveram ser adicionadas pelo dono/administrador do e-commerce. Com o tempo devera ser substituido para que o administrador adicione essas informações.
          texto="INY VINTAGE CHAIR"
          alt="ola mundo"
          image={Image1}
          backGround="background1"
        />
        <ProductType1
          //! Essas propiedades abaixo deveram ser adicionadas pelo dono/administrador do e-commerce. Com o tempo devera ser substituido para que o administrador adicione essas informações.
          texto="LARGE TERRACOTA
        VASE"
          alt="ola mundo"
          image={Image2}
          backGround="background2"
        />
      </section>
      <section className="main-containerPrincipal-container4">
        <SmallBoxe title="LINEN BEACH TOWEL" value={30} image={Image3} />
        <SmallBoxe title="Square Clear Glass Box" value={30} image={Image4} />
        <SmallBoxe title="4-pack Small Ceramic Plates" value={30} image={Image5} />
        <SmallBoxe title="Metal Wire Basket" value={30} image={Image6} />
        <SmallBoxe title="Round Jute Placemat" value={30} image={Image7} />
        <SmallBoxe title="Large Clear Glass Box
" value={30} image={Image8} />
        <SmallBoxe title="LINEN BEACH TOWEL" value={30} image={Image3} />
        <SmallBoxe title="LINEN BEACH TOWEL" value={30} image={Image6} />        
      </section>
    </section>
  );
}
