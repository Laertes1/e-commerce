//? Css
import "./horizontalBoxer.css";
//? Images
import Image from "../../../assets/images/Rectangle 26.svg";
//? Components
import Rating from "../../rating/rating";
export default function horizontalBoxer() {
  return (
    <div className="horizontalBoxer">
      <span className="horizontalBoxer-container1">
        <img src={Image} alt="" className="horizontalBoxer-container1-img" />
      </span>
      <span className="horizontalBoxer-container2">
        <span className="horizontalBoxer-container2-box1">
          <h4 className="horizontalBoxer-container2-box1-title">
            Tray with Foot
          </h4>
          <Rating/>
        </span>
        <span className="horizontalBoxer-container2-box2">
          <p className="horizontalBoxer-container2-box2-value">30$</p>
        </span>
      </span>
    </div>
  );
}
