//? Css
import "./horizontalBoxer.css"
//? Images
import Image from "../../../assets/images/Rectangle 26.svg" 
export default function horizontalBoxer() {
  return (
    <div className="horizontalBoxer">
      <span className="horizontalBoxer-container1">
        <img src={Image} alt="" className="horizontalBoxer-container1-img" />
      </span>
      <span className="horizontalBoxer-container2"></span>
    </div>
  );
}
