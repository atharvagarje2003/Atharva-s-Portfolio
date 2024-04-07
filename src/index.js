import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import Aboutme from "./components/Aboutme";
import GifComponent from "./components/GifComponent";
import Social from "./components/Social";
import Box from '@mui/material/Box'; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div  style={{alignItems:'center'}}>
  <Box component="div" style={{ p: 2,  paddingTop: '10px', paddingBottom: '10px', maxWidth: '80%' , marginLeft:'12%', marginRight:'12%', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' , borderRadius:'4px', marginTop:'20px',marginBottom:'20px'}}>
  
    <Header />
    <GifComponent />
    <Aboutme />
    <Social />
  </Box>
  </div>
);

// Other code remains unchanged
reportWebVitals();
