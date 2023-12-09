//? Import Css
import "./largeBox.css";
//? Import Components
import { ButtonBlack } from "../../buttons/buttonBlack/ButtonBlack";
//! Componente que irá levar o usuario/comprador para uma aba especifica relacionado ao produto que aparecerá aqui.
export default function largeBox(props: {
  alt: string;
  image: string;
  texto: string;
  backGround: string;
}) {
  console.log(`largeBox-container ${props.backGround}`);
  return (
    <div className={`largeBox-container ${props.backGround}`}>
      <span className="largeBox-container-box1">
        <img
          src={props.image}
          alt={props.alt}
          className="largeBox-container-box1-image"
        />
      </span>
      <span className="largeBox-container-box2">
        <p className="largeBox-container-box2-texto">{props.texto}</p>
        <ButtonBlack texto="VIEW DETAILS" />
      </span>
    </div>
  );
}
