import React from "react";
import Github from "../images/Github.jpg";
import linkedinlogo from "../images/linkedinlogo.jpg";
import foot from "../images/foot.jpg";
import Mail from "../images/Mail.png";

export default function Social() {
  return (
    <div
      className="nameconnectwithme"
      style={{
        fontFamily: "Lora, serif",
        fontSize: "18px",
        color: "#333",
        marginTop: "5px",
        textAlign: "center",
      }}
    >
      <h1 style={{ justifyContent: "center", fontSize: "25px" }}>
        Connect With Me{" "}
      </h1>
      <div
        className="connectwithme"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "60px",
          }}
        >
          <li className="github">
            <a href="https://github.com/atharvagarje0320" target="blank">
              <img
                src={Github}
                style={{
                  height: "27px",
                  width: "45px",
                  cursor: "pointer",
                  marginBottom: "5px",
                }}
              />
            </a>

            <a href="atharva03sanjivaniit@gmail.com" target="blank">
              <img
                src={Mail}
                style={{ height: "40px", width: "45px", cursor: "pointer" }}
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/atharva-garje-b893a82a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
            >
              <img
                src={linkedinlogo}
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
      <h2 style={{ color: "GrayText", justifyContent: "center" }}>
        Made with 💛 By Atharva Garje{" "}
      </h2>

      <div className="Footerimage">
        <img src={foot} style={{backgroundSize:'cover',backgroundPosition:'center',width:'80%', height:'200%' }} />
      </div>
    </div>
  );
}
