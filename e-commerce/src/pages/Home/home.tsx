import "./home.css";
//? Icons
import Card from "../../assets/card.svg";
import Car from "../../assets/car.svg";
import Phone from "../../assets/headPhone.svg";
//? Imagens
import Chair from "../../assets/poltrona.svg";
//? Components
import Button from "../../components/buttons/Button";
export default function home() {
  return (
    <section className="main-containerPrincipal">
      <section className="main-containerPrincipal-box1">
        <div className="main-containerPrincipal-box1-boasPraticasDaEmpresa">
          <span className="main-containerPrincipal-box1-boasPraticasDaEmpresa-boxes box1">
            <img src={Car} alt="entrega" />
            <p className="main-containerPrincipal-box1-boasPraticasDaEmpresa-boxes-paragraph">
              FREE SHIPPING
            </p>
          </span>
          <span className="main-containerPrincipal-box1-boasPraticasDaEmpresa-boxes box2">
            <img src={Card} alt="pagamento" />
            <p className="main-containerPrincipal-box1-boasPraticasDaEmpresa-boxes-paragraph">
              100% MONEY BACK
            </p>
          </span>
          <span className="main-containerPrincipal-box1-boasPraticasDaEmpresa-boxes box3">
            <img src={Phone} alt="Atendimento" />
            <p className="main-containerPrincipal-box1-boasPraticasDaEmpresa-boxes-paragraph">
              SUPPORT 24/7
            </p>
          </span>
        </div>
      </section>
      {/* //! Banner */}

      {/* //! Para essa parte devera ter uma forma do dono do e-commerce adicionar todos esses valores, incluindo: A imagem, textos e a cor de fundo.  */}
      <section className="main-containerPrincipal-box2">
        {/*//? Div na qual ficara a imagem*/}
        <div className="main-containerPrincipal-box2-box1">
          <img
            src={Chair}
            alt="Imagem principal"
            className="main-containerPrincipal-box2-imagem"
          />
        </div>
        <div className="main-containerPrincipal-box2-box2">
          <span className="main-containerPrincipal-box2-box2-span1">
            <p className="main-containerPrincipal-box2-box2-paragraph">
              HOT DEALS THIS WEEK
            </p>
            <h1 className="main-containerPrincipal-box2-box2-title">
              SALE UP 50% MODERN FURNITURE
            </h1>
          </span>

          <Button  />
        </div>
      </section>
      {/*//! Final da parte do banner */}
    </section>
  );
}
