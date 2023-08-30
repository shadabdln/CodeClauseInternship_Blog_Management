import React from "react";
import "./cardDetails.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { cardData } from "../Cards/CardsData";
const CardDetails = () => {
  const { filterby } = useParams();
  const productDisplay = cardData.filter((item) => item.name === filterby)[0];
  console.log(productDisplay.image)


  console.log(productDisplay);
  return (
    <div className="main_container">
      <div className="abc">
        <div className="go_back">
          <FaLongArrowAltLeft className="icon" />
          <span>
            <Link to="/">Go back</Link>
          </span>
        </div>

        <div className="container">
          <span>Published june 03, 2021</span>
          <h2>{productDisplay.heading}</h2>
          <div className="skill">
            <button>Frontend</button>
            <button>UI/UX</button>
            <button>Design</button>
          </div>
          <div className="img_box">
            <img
              src={productDisplay.image}
              alt=""
            
            />
            <p>{productDisplay.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;