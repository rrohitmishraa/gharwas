import React, { memo } from "react";
import Lottie from "lottie-react";
import "./App.css";
import rangoli from "./rangoli.json";

const OptimizedLottie = memo(() => (
  <Lottie
    className="rangoli-anim"
    animationData={rangoli}
    background="transparent"
    speed="0.5"
    autoplay
  />
));

function App() {
  return (
    <div className="container">
      <OptimizedLottie />
      <div className="content">
        <img src="./components/paneshji.png" className="ganeshji-pic" alt="" />
        <span className="text-two">
          Harish Chandra Kumar Mishra <br /> & Kavita Mishra
        </span>
        <span className="top-text"> Cordially invite you to the </span>
        <span className="gp"> Griha Pravesh Ceremony </span>
        <span className="text-two"> OF OUR NEW HOME ON </span>
        <span className="date"> 8th Nov 2024</span>
        <span className="text-two"> 10:00AM ONWARDS </span>

        <img src="./components/family.png" className="fam-pic" alt="" />

        <span className="text-two">Akhtiyarpur, Samastipur, Bihar, 848127</span>
      </div>
      <div className="map">rohit</div>
    </div>
  );
}

export default App;
