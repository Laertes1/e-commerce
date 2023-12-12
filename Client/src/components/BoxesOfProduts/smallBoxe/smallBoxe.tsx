//? Import Css
import "../smallBoxe/smallBoxe.css";
//? Button
import { ButtonWhite } from "../../buttons/buttonWhite/ButtonWhite";
//? Components
import  Rating  from "../../rating/rating"
export default function smallBoxe(props: {
  title: string;
  value: number;
  image: string;
}) {
  return (
    <section className="smallBoxe">
      <div className="smallBoxe-container1">
        <span className="smallBoxe-container1-box1">
          <img
            src={props.image}
            alt="Imagens de produtos"
            className="smallBoxe-container1-box1-image"
          />
        </span>
        <span className="smallBoxe-container1-box2">
          <h4 className="smallBoxe-container1-box2-title">{props.title}</h4>
          {/*//! Avaliação */}

          <Rating/>

          <p className="smallBoxe-container1-box2-value">{props.value}$</p>
        </span>
      </div>
      <div className="smallBoxe-details">
        <span className="smallBoxe-details-box">
        <h3 className="smallBoxe-details-box-title">{props.title}</h3>
        <p className="smallBoxe-details-box-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ButtonWhite
        texto="VIEW NOW"
        />
        </span>
      </div>
    </section>
  );
}
