import React, { useState } from "react";
import "./card.css";
import { cardData } from "./CardsData";
import {Link,useNavigate} from 'react-router-dom'

const Card = () => {
  const [data, setData] = useState(cardData);
  const [filterData, setFilterData] = useState(cardData);
  const[clearInput,setClearInput] = useState ('')
  const navigate = useNavigate();


  const SearchFilter = (e) => {
    const searchItem = data.filter((item) => {
      if (e.target.value == "") {
        return item;
      } else if (
        item.department.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setClearInput(e.target.value)
    setFilterData(searchItem);
  };

  const inputButton = () =>{
    setFilterData(data);
    setClearInput('')
  }

  return (
    <div className="main_container">
      <div className="input_box">
        <input type="text" placeholder="search..." onChange={SearchFilter} value={clearInput}/>
        <button type="submit"onClick={inputButton}>x</button>
      </div>
      <div className="container">
        <div className="allCards">
          {filterData.map((item) => {
            return (
              <div className="card">
                <img className="img" src={item.image} />
                <button ><Link to ={`/details/${item.name}`} >{item.department}</Link></button>
                <h3>{item.heading}</h3>
                <p>{item.para}</p>
                <div className="card_footer">
                  <img className="avatar" src={item.avatar} />
                  <div className="avatar_info">
                    <h5>{item.name}</h5>
                    <h6>{item.date}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;