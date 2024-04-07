import React from "react";

const Aboutme = () => {
    return(
    <div
    className="aboutme"
    style={{
      padding: '20px',
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      transform: 'scale(1)',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      e.target.style.transform = 'scale(1.02)';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'rgb(255, 255, 255)';
      e.target.style.transform = 'scale(1)';
    }}
  >
    <h1 style={{ fontFamily: 'Lora, serif', fontSize: '30px', color: '#333' , marginTop:'5px' , textAlign:'center'}}>About Me:</h1>
    <p
      className="summary"
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '24px',
        color: '#555',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      Hello! I’m Atharva Anil Garje, currently residing in Pune. I am a final-year B.Tech student, pursuing my degree in Information Technology Engineering. As a software engineer at Twinsis Tech, I am passionate about creating innovative solutions and contributing to the tech industry. Feel free to explore my portfolio to learn more about my work and projects!
    </p>
  </div>
    )
}

export default Aboutme;