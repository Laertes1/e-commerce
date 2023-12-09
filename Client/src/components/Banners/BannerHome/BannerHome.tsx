//? Css
import "./BannerHome.css";
//? Button black
import { ButtonBlack } from "../../buttons/buttonBlack/ButtonBlack";
export default function BannerHome() {
  return (
    <div className="BannerHome" >
      <span className="BannerHome-container">
        <span className="BannerHome-container-box1">
          <h4 className="BannerHome-container-box1-title">BEDSHEET SETS</h4>
        </span>
        <span className="BannerHome-container-box2">
          <p className="BannerHome-container-box2-value1">$50.00</p>
          <p className="BannerHome-container-box2-value2">$220.00</p>
        </span>
        <span className="BannerHome-container-box3">
          <p className="BannerHome-container-box3-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
           <ButtonBlack
           texto="VIEW DETAILS"
           />
        </span>
      </span>
    </div>
  );
}
