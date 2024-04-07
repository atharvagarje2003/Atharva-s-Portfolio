import React from "react";
import Atharva from "../images/Atharva.jpeg";
import download from "../images/download.gif";


function Header() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div className="profile-photo">
        <img
          src={Atharva}
          alt="Atharva"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            margin: "0 auto",
            display: "block",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s ease",
            fontFamily: "cursive",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        />
      </div>
      <div
        className="profile-name"
        style={{ fontFamily: "Roboto, sans-serif", marginTop: "10px" }}
      >
        <h1
          className="name"
          style={{
            fontFamily: "Lora, serif",
            fontSize: "36px",
            color: "#333",
          }}
        >
          Atharva Anil Garje
        </h1>
        <h2
          style={{
            fontFamily: "Lora, serif",
            color: "GrayText",
            justifyContent: "center",
          }}
        >
          Proud to be an Indian, I am Developer
        </h2>
       
      </div>
    </div>
  );
}

export default Header;
