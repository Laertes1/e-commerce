//? Import Css
import "../smallBoxe/smallBoxe.css";
//? Button
import { ButtonWhite } from "../../buttons/buttonWhite/ButtonWhite";
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

          <span className="rating">
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" htmlFor="star5"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" htmlFor="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" checked />
            <label title="text" htmlFor="star3"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" htmlFor="star2"></label>
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" htmlFor="star1"></label>
          </span>

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
