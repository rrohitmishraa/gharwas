import React, { memo, useEffect, useState } from "react";
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
  const [lang, setLang] = useState("eng");

  const languages = {
    eng: {
      name1: "Harish Chandra Kumar Mishra",
      with: "with",
      name2: "Kavita Mishra",
      invite: "Cordially invite you to the",
      pravesh: "Griha Pravesh Ceremony",
      where: "OF OUR NEW HOME IN",
      date: "On 8th Nov 2024",
      time: "10:00AM ONWARDS",
      location: "Location:",
      address: "Akhtiyarpur, Samastipur, Bihar, 848127",
      click: "(Click on the map to get directions)",
      days: "Days",
      hours: "Hours",
      mein: "Happily",
    },
    hin: {
      name1: "हरिश चंद्र कुमार मिश्रा",
      with: "संग",
      name2: "कविता मिश्रा",
      invite: "आपको सप्रेम आमंत्रित करते हैं",
      pravesh: "गृह प्रवेश समारोह",
      where: "मैं, हमारे नए घर पर।",
      date: "8 नवंबर 2024 को",
      time: "सुबह 10:00 बजे से",
      location: "स्थान:",
      address: "अख्तियारपुर, समस्तीपुर, बिहार, 848127",
      click: "(दिशानिर्देश प्राप्त करने के लिए नक्शे पर क्लिक करें)",
      days: "दिन",
      hours: "घंटे",
      mein: "मैं",
    },
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2024-11-08T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    return { days, hours };
  }

  return (
    <div className="container">
      <OptimizedLottie />
      <div className="content">
        <img src="./components/paneshji.png" className="ganeshji-pic" alt="" />
        <span className="names one">
          {lang == "eng" ? languages.eng.name1 : languages.hin.name1}
        </span>
        <span className="names two">
          <span>{lang == "eng" ? languages.eng.with : languages.hin.with}</span>
          {lang == "eng" ? languages.eng.name2 : languages.hin.name2}
        </span>
        <span className="top-text">
          {lang == "eng" ? languages.eng.invite : languages.hin.invite}
        </span>
        <span className="gp">
          {lang == "eng" ? languages.eng.pravesh : languages.hin.pravesh}
        </span>
        <span className="text-two">
          {lang == "eng" ? languages.eng.where : languages.hin.where}
        </span>
        <div className="countdown">
          <p>
            {timeLeft.days}
            <span>
              {lang == "eng" ? languages.eng.days : languages.hin.days}
            </span>
          </p>
          <p>
            {timeLeft.hours}
            <span>
              {lang == "eng" ? languages.eng.hours : languages.hin.hours}
            </span>
          </p>
        </div>
        <span className="time">
          {lang == "eng" ? languages.eng.mein : languages.hin.mein}
        </span>
        <span className="date">
          {lang == "eng" ? languages.eng.date : languages.hin.date}
        </span>
        <span className="time">
          {lang == "eng" ? languages.eng.time : languages.hin.time}
        </span>

        <img src="./components/family.png" className="fam-pic" alt="" />

        <div className="location">
          <span className="address-head">
            {lang == "eng" ? languages.eng.location : languages.hin.location}
          </span>
          <span className="address">
            {lang == "eng" ? languages.eng.address : languages.hin.address}
          </span>

          <span className="address">
            <i>{lang == "eng" ? languages.eng.click : languages.hin.click}</i>
          </span>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.54094407664!2d85.69768057628198!3d25.719618910341104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed856c657d39b9%3A0x2b575df3e3c60b56!2sMishraa%20Bhawan%20(HCK%20Mishra%2C%20Kavita%20Mishra)!5e0!3m2!1sen!2sin!4v1722975673135!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>
        <div className="thanks btnT">
          Choose Language | भाषा चुनें
          <div>
            <div
              className="btnEng"
              onClick={() => {
                setLang("eng");
              }}
            >
              English
            </div>

            <div
              className="btnHin"
              onClick={() => {
                setLang("hin");
              }}
            >
              हिंदी
            </div>
          </div>
        </div>
        <div className="thanks">THANKS</div>
      </div>
    </div>
  );
}

export default App;
