import React from "react";

const GifComponent = () => {
    return (
        <div
            className="codegif"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                paddingTop:'-100px'
                
            }}
        >
            <img alt="gif"
                src="https://cdn.dribbble.com/users/2131993/screenshots/4948736/thoughtworks-gif_dribbble.gif "
                
                style={{
                    width: "100%",
                    height: "auto",
                    transition: "transform 0.3s ease",
                    maxWidth: "600px", // Set a maximum width for responsiveness
                }}
                onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                }}
            />
            
        </div>
    );
};

export default GifComponent;
