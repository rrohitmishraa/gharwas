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
        <span className="names">
          Harish Chandra Kumar Mishra <br /> & Kavita Mishra
        </span>
        <span className="top-text"> Cordially invite you to the </span>
        <span className="gp"> Griha Pravesh Ceremony </span>
        <span className="text-two"> OF OUR NEW HOME ON </span>
        <span className="date"> 8th Nov 2024</span>
        <span className="text-two"> 10:00AM ONWARDS </span>

        <img src="./components/family.png" className="fam-pic" alt="" />

        <div className="location">
          <span className="address-head">Location:</span>
          <span className="address">
            Akhtiyarpur, Samastipur, Bihar, 848127
          </span>

          <span className="address">
            <i>(Click on the map to get directions)</i>
          </span>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.54094407664!2d85.69768057628198!3d25.719618910341104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed856c657d39b9%3A0x2b575df3e3c60b56!2sMishraa%20Bhawan%20(HCK%20Mishra%2C%20Kavita%20Mishra)!5e0!3m2!1sen!2sin!4v1722975673135!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
