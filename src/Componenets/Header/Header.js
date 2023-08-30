import React from "react";
import "./header.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Card from "../Cards/Card";

const Header = () => {
  return (
    <div className="header">
      <div className="heading">
        <h2>In. This morning</h2>
        <h1>
          <RiDoubleQuotesL className="quotes" />
          Blog
          <RiDoubleQuotesR className="quotes" />
        </h1>
        <p>awesome place to make oneself</p>
        <p>productive and entertained through daily updates</p>
        <Card />
      </div>
    </div>
  );
};

export default Header;