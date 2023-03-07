import React from "react";
import "./components.scss";
import GPT from "../Images/openai.svg";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="navbar-logo" src={GPT} alt="GPtusk" />
        <div className="navbar-name">GPTastic</div>
      </div>
    </>
  );
}
